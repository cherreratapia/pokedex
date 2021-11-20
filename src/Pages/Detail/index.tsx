import { IPokemon } from "interfaces/PokeApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getPokemon from "services/getPokemon";
import { Layout } from "StyledComponents";

export default function Detail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!name) {
      setLoading(false);
      return;
    }
    getPokemon({ name })
      .then((data) => setPokemon(data))
      .catch((err) => console.error("error getting pokemon", err))
      .finally(() => setLoading(false));
  }, []);

  if (!isLoading && !pokemon) return <p>Error pokemon</p>;

  return (
    <Layout.Container>
      <Layout.Row>
        <p className="capitalize">{pokemon?.name}</p>
      </Layout.Row>
    </Layout.Container>
  );
}
