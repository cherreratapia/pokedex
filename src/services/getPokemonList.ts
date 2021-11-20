import axios from "axios";
import { INamedAPIResourceList } from "../interfaces/PokeApi";

interface IPokemonParams {
  name?: string;
  offset?: number;
  limit?: number;
}
export default async function getPokemonList({
  name,
  offset = 0,
  limit = 12,
}: IPokemonParams): Promise<INamedAPIResourceList> {
  const url: string =
    "https://pokeapi.co/api/v2/pokemon/" +
    (name ? `${name}/` : `?offset=${offset}&&limit=${limit}`);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
