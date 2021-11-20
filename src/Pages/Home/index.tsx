import { useEffect, useRef, useState } from "react";
import { Layout } from "StyledComponents";
import { INamedAPIResource } from "interfaces/PokeApi";
import getPokemonList from "services/getPokemonList";
import PokemonCard from "Components/Card";

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
          Cargar más Pokemon
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
      ) {
        console.log("loading true");
        setLoading(true);
      }

      // if (!autoLoad) return;
      // console.log(
      //   "🚀 ~ file: index.tsx ~ line 35 ~ handleScroll ~ document.documentElement.scrollTop",
      //   document.documentElement.scrollTop
      // );
      // console.log(
      //   "🚀 ~ file: index.tsx ~ line 39 ~ handleScroll ~ document.documentElement.offsetHeight",
      //   document.documentElement.offsetHeight
      // );
      // if (
      //   window.innerHeight + document.documentElement.scrollTop + 50 <
      //   document.documentElement.offsetHeight
      // )
      //   return;
      // console.log("loading: true");
      // setLoading(true);
    }
    // if (!autoLoad && isLoading) onLoad();

    if (autoLoad && isLoading) {
      console.log("load automatically");
      onLoad().then(() => setLoading(false));
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [autoLoad, isLoading, hasNext]);

  return (
    <Layout.Container>
      <Layout.Row flexWrap justifyBetween>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemonEndpoint={pokemon} />
        ))}
      </Layout.Row>
      <Layout.Row justifyCenter alignCenter>
        {showAutoLoad()}
      </Layout.Row>
    </Layout.Container>
  );
}
