import { IPokemon } from "interfaces/PokeApi";
import { PokemonDetail, Layout, Pokemon } from "StyledComponents";

interface Props {
  pokemon?: IPokemon;
}
export default function Info({ pokemon }: Props) {
  return (
    <PokemonDetail.Info>
      <Layout.Row>
        {pokemon?.height ? (
          <PokemonDetail.InfoItem>
            <PokemonDetail.TitleInfo>Height</PokemonDetail.TitleInfo>
            <PokemonDetail.TextInfo>
              {pokemon.height / 10} m.
            </PokemonDetail.TextInfo>
          </PokemonDetail.InfoItem>
        ) : null}
        {pokemon?.weight ? (
          <PokemonDetail.InfoItem>
            <PokemonDetail.TitleInfo>Weight</PokemonDetail.TitleInfo>
            <PokemonDetail.TextInfo>
              {pokemon.weight / 10} kg.
            </PokemonDetail.TextInfo>
          </PokemonDetail.InfoItem>
        ) : null}
      </Layout.Row>
      <Layout.Column>
        {pokemon?.stats
          ? pokemon.stats.map((element) => (
              <PokemonDetail.Stats key={element.stat.name}>
                {element.stat.name}: {element.base_stat}
              </PokemonDetail.Stats>
            ))
          : null}
      </Layout.Column>
    </PokemonDetail.Info>
  );
}
