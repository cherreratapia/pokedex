import { IAbility, IPokemonAbility } from "interfaces/PokeApi";
import { useEffect, useState } from "react";
import getAbilities from "services/getAbilities";
import { Layout, PokemonDetail } from "StyledComponents";

interface IProps {
  abilityResource: IPokemonAbility;
}

export default function Ability(props: IProps) {
  const { abilityResource } = props;
  const [ability, setAbility] = useState<IAbility>();
  const effect = ability?.effect_entries.find(
    (effect) => effect.language.name === "en"
  )?.effect;

  useEffect(() => {
    if (!abilityResource) return;
    getAbilities(abilityResource.ability.name)
      .then(setAbility)
      .catch((err) =>
        console.error("There was an error getting the ability", err)
      );
  }, []);

  if (!abilityResource || !ability || !effect) return null;
  return (
    <PokemonDetail.Ability>
      <Layout.SubTitle>{ability.name}</Layout.SubTitle>
      <PokemonDetail.Description>{effect}</PokemonDetail.Description>
    </PokemonDetail.Ability>
  );
}
