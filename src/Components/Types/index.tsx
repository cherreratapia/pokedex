import { IPokemon } from "interfaces/PokeApi";
import { Layout, Pokemon } from "StyledComponents";
import PokemonTypes from "StyledComponents/PokemonTypes";

interface IProps {
  pokemon?: IPokemon;
}
export default function Types({ pokemon }: IProps) {
  return (
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
  );
}
