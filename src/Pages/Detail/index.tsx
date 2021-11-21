import { IPokemon } from "interfaces/PokeApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getPokemon from "services/getPokemon";
import { Layout, PokemonDetail, Pokemon } from "StyledComponents";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import Info from "./Info";
import Types from "Components/Types";

export default function Detail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!name) {
      setLoading(false);
      return;
    }
    getPokemon({ name })
      .then((data) => setPokemon(data))
      .catch((err) => console.error("error getting pokemon", err))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) return <p>Cargando</p>;
  if (!isLoading && !pokemon) return <p>Error pokemon</p>;

  return (
    <Layout.Row justifyCenter alignCenter>
      <Layout.CircleButton>
        <GoChevronLeft size="2rem" />
      </Layout.CircleButton>
      <PokemonDetail.Container>
        <Layout.Row justifyCenter alignCenter>
          <PokemonDetail.Name>{pokemon?.name}</PokemonDetail.Name>
          <PokemonDetail.Id>Nº {pokemon?.id}</PokemonDetail.Id>
        </Layout.Row>
        <Layout.Row>
          <Layout.Column>
            <PokemonDetail.Image src={pokemon?.sprites.front_default} />
          </Layout.Column>
          <Layout.Column>
            <Info pokemon={pokemon} />
          </Layout.Column>
        </Layout.Row>
        <Layout.Column alignCenter>
          <Pokemon.Name>Tipo</Pokemon.Name>
          <Types pokemon={pokemon} />
        </Layout.Column>
      </PokemonDetail.Container>
      <Layout.CircleButton>
        <GoChevronRight size="2rem" />
      </Layout.CircleButton>
    </Layout.Row>
  );
}
