import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from "react-router";
import { Layout } from "StyledComponents";

interface IProps {
  pokemonId?: number;
}

export default function BackButton({ pokemonId }: IProps) {
  const navigate = useNavigate();

  const goBack = () => {
    if (!pokemonId) return null;
    if (pokemonId === 1) return null;
    navigate(`/pokemon/${pokemonId - 1}`);
  };

  if (!pokemonId) return null;

  return (
    <Layout.Column alignCenter>
      <Layout.CircleButton onClick={goBack} disabled={pokemonId === 1}>
        <GoChevronLeft size="2rem" />
      </Layout.CircleButton>
      {pokemonId !== 1 ? <Layout.Control>Previous</Layout.Control> : null}
    </Layout.Column>
  );
}
