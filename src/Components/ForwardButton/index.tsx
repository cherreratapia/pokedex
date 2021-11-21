import { GoChevronRight } from "react-icons/go";
import { useNavigate } from "react-router";
import { Layout } from "StyledComponents";

interface IProps {
  pokemonId?: number;
}

export default function ForwardButton({ pokemonId }: IProps) {
  const navigate = useNavigate();

  const goFoward = () => {
    if (!pokemonId) return null;
    navigate(`/pokemon/${pokemonId + 1}`);
  };

  if (!pokemonId) return null;

  return (
    <Layout.Column alignCenter>
      <Layout.CircleButton onClick={goFoward}>
        <GoChevronRight size="2rem" />
      </Layout.CircleButton>
      <Layout.Control>Next</Layout.Control>
    </Layout.Column>
  );
}
