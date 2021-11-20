import { INamedAPIResource, IPokemon } from "interfaces/PokeApi";
import { useEffect, useState } from "react";
import getPokemon from "services/getPokemon";
import { Layout, Pokemon } from "StyledComponents";
import PokemonTypes from "StyledComponents/PokemonTypes";

interface IProps {
  pokemonEndpoint: INamedAPIResource;
}
export default function PokemonCard(props: IProps) {
  const { pokemonEndpoint } = props;
  const [isLoading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    const { name } = pokemonEndpoint;
    getPokemon({ name })
      .then((data) => setPokemon(data))
      .catch((err) => {
        setLoading(false);
        console.error("Error getting pokemon: ", pokemonEndpoint.name, err);
      });
  }, []);

  useEffect(() => {
    if (pokemon) setLoading(false);
  }, [pokemon]);

  if (!pokemon && isLoading) return <Pokemon.Skeleton />;
  if (!pokemon && !isLoading) return null;

  return (
    <Pokemon.Card>
      <Pokemon.Image src={pokemon?.sprites.front_default} />
      <Pokemon.Info>
        <Pokemon.Id>Nº {pokemon?.id}</Pokemon.Id>
        <Pokemon.Name>{pokemon?.name}</Pokemon.Name>
        <Layout.Row>
          {pokemon?.types.map(({ type }, index) => {
            const { name } = type;
            const Type = PokemonTypes[name];
            return (
              <Type key={index}>
                <Pokemon.Type>{name}</Pokemon.Type>
              </Type>
            );
          })}
        </Layout.Row>
      </Pokemon.Info>
    </Pokemon.Card>
  );
}
