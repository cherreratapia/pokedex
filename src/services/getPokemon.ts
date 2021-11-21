import axios from "axios";
import { IPokemon } from "../interfaces/PokeApi";

interface IPokemonParams {
  name?: string;
  id?: number;
}
export default async function getPokemon({
  name,
  id,
}: IPokemonParams): Promise<IPokemon> {
  const url: string = `https://pokeapi.co/api/v2/pokemon/${
    name ? name : id ? String(id) : ""
  }/`;
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
