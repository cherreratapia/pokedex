import { useContext, useEffect, useRef, useState } from "react";
import { Layout } from "StyledComponents";
import getPokemonList from "services/getPokemonList";
import PokemonCard from "Components/Card";
import Search from "Components/Search";
import BaseContext from "Store/Contexts/BaseContext";
import { BaseTypes } from "Store/Reducers/BaseReducer";
import Limit from "Components/Limit";
import Logo from "assets/Logo.png";

export default function Home() {
  const { state, dispatch } = useContext(BaseContext);
  const { pokemons, hasNext, offset, limit } = state;
  const [autoLoad, setAutoLoad] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const onLoad = async () => {
    if (!hasNext) return;
    setAutoLoad(true);
    try {
      const { results, next } = await getPokemonList({
        offset: offset + limit,
        limit,
      });
      dispatch({ type: BaseTypes.SetNext, payload: !!next });
      dispatch({ type: BaseTypes.SetPokemons, payload: results });
    } catch (error) {
      console.error("There was an error retrieving pokemons: ", error);
    }
    dispatch({ type: BaseTypes.NextPage });
  };

  const showAutoLoad = () => {
    if (!hasNext) return null;
    if (!autoLoad && !isLoading) {
      return (
        <Layout.PrimaryButton onClick={onLoad}>
          Load more Pokemons
        </Layout.PrimaryButton>
      );
    }
    if (autoLoad && isLoading) {
      return <Layout.Loading />;
    }
    return null;
  };

  useEffect(() => {
    const getInitialPokemons = async () => {
      try {
        const { results, next } = await getPokemonList({ offset, limit });
        dispatch({ type: BaseTypes.SetNext, payload: !!next });
        if (results[0].name !== pokemons[0]?.name)
          dispatch({ type: BaseTypes.SetPokemons, payload: results });
      } catch (error) {
        console.log("error", error);
      }
    };
    getInitialPokemons().then(() => setLoading(false));
  }, [limit]);

  useEffect(() => {
    function handleScroll() {
      if (!autoLoad) return;
      if (isLoading) return;
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      )
        setLoading(true);
    }

    if (autoLoad && isLoading) onLoad().then(() => setLoading(false));

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [autoLoad, isLoading, hasNext]);

  return (
    <Layout.Container>
      <Layout.Column>
        <Layout.Row justifyCenter>
          <Layout.Logo src={Logo} />
        </Layout.Row>
        {isLoading && !pokemons.length ? (
          <Layout.Container>
            <Layout.Column justifyCenter alignCenter hScreen>
              <Layout.Loading />
            </Layout.Column>
          </Layout.Container>
        ) : (
          <Layout.Shadow>
            <Search />
            <Limit setLoading={setLoading} />
            <Layout.Row flexWrap justifyBetween>
              {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.name} pokemonEndpoint={pokemon} />
              ))}
            </Layout.Row>
            <Layout.Row justifyCenter alignCenter>
              {showAutoLoad()}
            </Layout.Row>
          </Layout.Shadow>
        )}
      </Layout.Column>
    </Layout.Container>
  );
}
