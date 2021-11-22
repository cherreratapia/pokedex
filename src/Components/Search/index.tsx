import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Layout } from "StyledComponents";
import useDebounce from "hooks/useDebounce";
import getPokemon from "services/getPokemon";

export default function Search() {
  const navigate = useNavigate();
  const [term, setTerm] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const debouncedTerm = useDebounce(term, 1000);

  const onClean = () => {
    setTerm("");
    setError(false);
  };

  useEffect(() => {
    if (debouncedTerm && debouncedTerm === term) {
      setLoading(true);
      getPokemon(term)
        .then(({ name }) => navigate(`/pokedex/pokemon/${name}`))
        .catch((err) => {
          console.error("This pokemon doesn't exist", err);
          setError(err);
        })
        .finally(() => setLoading(false));
    }
  }, [debouncedTerm]);

  return (
    <Layout.Column>
      <Layout.TextInput
        placeholder="Search your pokemon"
        value={term}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTerm(e.target.value)}
        isLoading={isLoading}
        isError={isError}
        onClean={onClean}
      />
    </Layout.Column>
  );
}
