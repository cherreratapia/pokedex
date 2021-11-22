import { useContext, useEffect, useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { useNavigate } from "react-router";
import { Layout } from "StyledComponents";
import BaseContext from "Store/Contexts/BaseContext";
import { IPokemon } from "interfaces/PokeApi";
import getPokemon from "services/getPokemon";

interface IProps {
  pokemonId?: number;
}

export default function ForwardButton({ pokemonId }: IProps) {
  const { state } = useContext(BaseContext);
  const { maxId } = state;
  const [nextPokemon, setNextPokemon] = useState<IPokemon>();
  const navigate = useNavigate();

  const goFoward = () => {
    if (!pokemonId) return null;
    navigate(`/pokemon/${pokemonId + 1}`);
  };

  useEffect(() => {
    if (!pokemonId) return;
    getPokemon(String(pokemonId + 1))
      .then(setNextPokemon)
      .catch((err) => console.error(`Error getting previous pokemon`, err));
  }, [pokemonId]);

  if (!pokemonId || !nextPokemon) return null;

  return (
    <Layout.CircleColumnContainer>
      <Layout.Column alignCenter>
        <Layout.CircleButton
          onClick={goFoward}
          disabled={!nextPokemon || pokemonId + 1 >= maxId}
        >
          <GoChevronRight size="2rem" />
        </Layout.CircleButton>
        {nextPokemon ? (
          <Layout.Control>{nextPokemon.name}</Layout.Control>
        ) : null}
      </Layout.Column>
    </Layout.CircleColumnContainer>
  );
}
