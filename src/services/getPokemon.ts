import axios from "axios";
import { IPokemon } from "../interfaces/PokeApi";

interface IPokemonParams {
  name: string;
}
export default async function getPokemon({
  name,
}: IPokemonParams): Promise<IPokemon> {
  const url: string = `https://pokeapi.co/api/v2/pokemon/${name}/`;
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
