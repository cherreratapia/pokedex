import Types from "Components/Types";
import { INamedAPIResource, IPokemon } from "interfaces/PokeApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import getPokemon from "services/getPokemon";
import { Pokemon } from "StyledComponents";

interface IProps {
  pokemonEndpoint: INamedAPIResource;
}
export default function PokemonCard(props: IProps) {
  const navigate = useNavigate();
  const { pokemonEndpoint } = props;
  const [isLoading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    const { name } = pokemonEndpoint;
    getPokemon(name)
      .then((data) => setPokemon(data))
      .catch((err) => {
        setLoading(false);
        console.error("Error getting pokemon: ", pokemonEndpoint.name, err);
      });
  }, []);

  useEffect(() => {
    if (pokemon) setLoading(false);
  }, [pokemon]);

  const onClick = () => {
    if (!pokemon) return;
    navigate(`/pokedex/pokemon/${pokemon.id}`);
  };

  if (!pokemon && isLoading) return <Pokemon.Skeleton />;
  if (!pokemon && !isLoading) return null;

  return (
    <Pokemon.Card onClick={onClick}>
      <Pokemon.Image src={pokemon?.sprites.front_default} />
      <Pokemon.Info>
        <Pokemon.Id>Nº {pokemon?.id}</Pokemon.Id>
        <Pokemon.Name>{pokemon?.name}</Pokemon.Name>
        <Types pokemon={pokemon} />
      </Pokemon.Info>
    </Pokemon.Card>
  );
}
