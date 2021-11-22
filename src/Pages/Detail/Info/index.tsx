import { IPokemon } from "interfaces/PokeApi";
import { PokemonDetail, Layout } from "StyledComponents";
import Ability from "../Ability";

interface Props {
  pokemon?: IPokemon;
}
export default function Info({ pokemon }: Props) {
  return (
    <PokemonDetail.Info>
      <Layout.Row>
        <PokemonDetail.StatsColumn flexGrow={false}>
          <Layout.SubTitle>Basic Info</Layout.SubTitle>
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
            <Layout.SubTitle>Basic Stats</Layout.SubTitle>
            {pokemon?.stats
              ? pokemon.stats.map((element) => (
                  <PokemonDetail.Stats key={element.stat.name}>
                    {element.stat.name}: {element.base_stat}
                  </PokemonDetail.Stats>
                ))
              : null}
          </Layout.Column>
        </PokemonDetail.StatsColumn>
        <Layout.Column>
          <Layout.Row justifyCenter>
            <Layout.Title>Abilities</Layout.Title>
          </Layout.Row>
          {pokemon?.abilities
            ? pokemon.abilities.map((ability) => (
                <Ability key={ability.ability.name} abilityResource={ability} />
              ))
            : null}
        </Layout.Column>
      </Layout.Row>
    </PokemonDetail.Info>
  );
}
