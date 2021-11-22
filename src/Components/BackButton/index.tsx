import { IPokemon } from "interfaces/PokeApi";
import { useEffect, useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from "react-router";
import getPokemon from "services/getPokemon";
import { Layout } from "StyledComponents";

interface IProps {
  pokemonId?: number;
}

export default function BackButton({ pokemonId }: IProps) {
  const navigate = useNavigate();
  const [prevPokemon, setPrevPokemon] = useState<IPokemon>();

  const goBack = () => {
    if (!pokemonId) return null;
    if (pokemonId === 1) return null;
    navigate(`/pokemon/${pokemonId - 1}`);
  };

  useEffect(() => {
    if (!pokemonId) return;
    getPokemon(String(pokemonId - 1))
      .then(setPrevPokemon)
      .catch((err) => console.error(`Error getting previous pokemon`, err));
  }, [pokemonId]);

  if (!pokemonId || !prevPokemon) return null;

  return (
    <Layout.CircleColumnContainer>
      <Layout.Column alignCenter>
        <Layout.CircleButton onClick={goBack} disabled={!prevPokemon}>
          <GoChevronLeft size="2rem" />
        </Layout.CircleButton>
        {prevPokemon ? (
          <Layout.Control>{prevPokemon.name}</Layout.Control>
        ) : null}
      </Layout.Column>
    </Layout.CircleColumnContainer>
  );
}
