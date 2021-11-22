import { IPokemon } from "interfaces/PokeApi";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import getPokemon from "services/getPokemon";
import { Layout, PokemonDetail, Pokemon } from "StyledComponents";
import Info from "./Info";
import Types from "Components/Types";
import BackButton from "Components/BackButton";
import ForwardButton from "Components/ForwardButton";
import Fallback from "./Fallback";
import getPokemonList from "services/getPokemonList";
import BaseContext from "Store/Contexts/BaseContext";
import { BaseTypes } from "Store/Reducers/BaseReducer";
import MiniLogo from "assets/Logo.png";

export default function Detail() {
  const navigate = useNavigate();
  const { dispatch } = useContext(BaseContext);
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [isLoading, setLoading] = useState<boolean>(true);

  const goPokedex = () => {
    navigate("/");
  };

  useEffect(() => {
    getPokemonList({}).then(({ count }) =>
      dispatch({ type: BaseTypes.SetMaxId, payload: count })
    );
  }, []);

  useEffect(() => {
    if (!name) {
      setLoading(false);
      return;
    }
    getPokemon(name)
      .then((data) => setPokemon(data))
      .catch((err) => {
        setPokemon(undefined);
        console.error("error getting pokemon", err);
      })
      .finally(() => setLoading(false));
  }, [name]);

  if (isLoading || (!isLoading && !pokemon))
    return <Fallback isLoading={isLoading} />;

  return (
    <>
      <Layout.Column>
        <Layout.Row justifyCenter>
          <Layout.MiniLogo src={MiniLogo} />
        </Layout.Row>
        <Layout.Row justifyCenter alignCenter>
          <Layout.CircleColumn>
            <BackButton pokemonId={pokemon?.id} />
          </Layout.CircleColumn>
          <PokemonDetail.Container>
            <Layout.Row justifyCenter alignCenter>
              <PokemonDetail.Name>{pokemon?.name}</PokemonDetail.Name>
              <PokemonDetail.Id>Nº {pokemon?.id}</PokemonDetail.Id>
            </Layout.Row>
            <PokemonDetail.Content>
              <PokemonDetail.ImageContainer>
                <PokemonDetail.Image src={pokemon?.sprites.front_default} />
              </PokemonDetail.ImageContainer>
              <Layout.Column>
                <Info pokemon={pokemon} />
              </Layout.Column>
            </PokemonDetail.Content>
            <Layout.Column alignCenter>
              <Pokemon.Name>Tipo</Pokemon.Name>
              <Types pokemon={pokemon} />
            </Layout.Column>
          </PokemonDetail.Container>
          <Layout.CircleColumn>
            <ForwardButton pokemonId={pokemon?.id} />
          </Layout.CircleColumn>
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
