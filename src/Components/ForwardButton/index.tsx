import { useContext } from "react";
import { GoChevronRight } from "react-icons/go";
import { useNavigate } from "react-router";
import { Layout } from "StyledComponents";
import BaseContext from "Store/Contexts/BaseContext";

interface IProps {
  pokemonId?: number;
}

export default function ForwardButton({ pokemonId }: IProps) {
  const { state } = useContext(BaseContext);
  const { maxId } = state;
  const navigate = useNavigate();

  const goFoward = () => {
    if (!pokemonId) return null;
    navigate(`/pokemon/${pokemonId + 1}`);
  };

  if (!pokemonId) return null;

  return (
    <Layout.CircleColumnContainer>
      <Layout.Column alignCenter>
        <Layout.CircleButton
          onClick={goFoward}
          disabled={pokemonId + 1 >= maxId}
        >
          <GoChevronRight size="2rem" />
        </Layout.CircleButton>
        <Layout.Control>Next</Layout.Control>
      </Layout.Column>
    </Layout.CircleColumnContainer>
  );
}
