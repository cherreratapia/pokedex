import { useEffect, useRef, useState } from "react";
import { Layout } from "StyledComponents";
import { INamedAPIResource } from "interfaces/PokeApi";
import getPokemonList from "services/getPokemonList";
import PokemonCard from "Components/Card";
import Search from "Components/Search";

export default function Home() {
  const [pokemons, setPokemons] = useState<INamedAPIResource[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(12);
  const [hasNext, setNext] = useState<boolean>();
  const [autoLoad, setAutoLoad] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const onLoad = async () => {
    if (!hasNext) return;
    setAutoLoad(true);
    setOffset((prev) => prev + limit);
    try {
      const { results, next } = await getPokemonList({
        offset: offset + limit,
        limit,
      });
      setNext(!!next);
      setPokemons([...pokemons, ...results]);
    } catch (error) {
      console.error("There was an error retrieving pokemons: ", error);
    }
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
        setNext(!!next);
        if (results[0].name !== pokemons[0]?.name)
          setPokemons([...pokemons, ...results]);
      } catch (error) {
        console.log("error", error);
      }
    };
    getInitialPokemons();
  }, []);

  useEffect(() => {
    function handleScroll(e: Event) {
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
          <Layout.Logo src="/assets/logo.png" />
        </Layout.Row>
        <Layout.Shadow>
          <Search />
          <Layout.Row flexWrap justifyBetween>
            {pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemonEndpoint={pokemon} />
            ))}
          </Layout.Row>
          <Layout.Row justifyCenter alignCenter>
            {showAutoLoad()}
          </Layout.Row>
        </Layout.Shadow>
      </Layout.Column>
    </Layout.Container>
  );
}
