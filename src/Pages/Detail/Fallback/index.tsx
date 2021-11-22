import { useNavigate } from "react-router";
import { Layout } from "StyledComponents";
import { GoX } from "react-icons/go";
import Logo from "assets/logo.png";

interface IProps {
  isLoading: boolean;
}
export default function Fallback(props: IProps) {
  const { isLoading } = props;
  const navigate = useNavigate();
  const goPokedex = () => {
    navigate("/pokedex/");
  };

  return (
    <Layout.Container>
      <Layout.Column justifyCenter alignCenter hScreen>
        <Layout.Row justifyCenter>
          <Layout.Logo src={Logo} />
        </Layout.Row>
        {isLoading ? (
          <Layout.Loading />
        ) : (
          <>
            <Layout.Row alignCenter>
              <Layout.Title>Pokemon Not Found</Layout.Title>
              <GoX size={"2rem"} className="text-red-600 ml-4" />
            </Layout.Row>
            <Layout.PrimaryButton onClick={goPokedex}>
              Return to Pokedex
            </Layout.PrimaryButton>
          </>
        )}
      </Layout.Column>
    </Layout.Container>
  );
}
