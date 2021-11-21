import axios from "axios";
import { IPokemon } from "../interfaces/PokeApi";

export default async function getPokemon(query: string): Promise<IPokemon> {
  const url: string = `https://pokeapi.co/api/v2/pokemon/${query}/`;
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
