import { IPokemon } from "interfaces/PokeApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import getPokemon from "services/getPokemon";
import { Layout, PokemonDetail, Pokemon } from "StyledComponents";
import Info from "./Info";
import Types from "Components/Types";
import BackButton from "Components/BackButton";
import ForwardButton from "Components/ForwardButton";
import Fallback from "./Fallback";

export default function Detail() {
  const navigate = useNavigate();
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [isLoading, setLoading] = useState<boolean>(true);

  const goPokedex = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!name) {
      setLoading(false);
      return;
    }
    getPokemon(name)
      .then((data) => setPokemon(data))
      .catch((err) => console.error("error getting pokemon", err))
      .finally(() => setLoading(false));
  }, [name]);

  if (isLoading || (!isLoading && !pokemon))
    return <Fallback isLoading={isLoading} />;

  return (
    <>
      <Layout.Column>
        <Layout.Row justifyCenter>
          <Layout.MiniLogo src="/assets/logo.png" />
        </Layout.Row>
        <Layout.Row justifyCenter alignCenter>
          <BackButton pokemonId={pokemon?.id} />
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
          <ForwardButton pokemonId={pokemon?.id} />
        </Layout.Row>
        <Layout.Row justifyCenter alignCenter className="mt-4">
          <Layout.PrimaryButton onClick={goPokedex}>
            Return to Pokedex
          </Layout.PrimaryButton>
        </Layout.Row>
      </Layout.Column>
    </>
  );
}
