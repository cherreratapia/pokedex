import axios from "axios";
import { IPokemonHabitat } from "../interfaces/PokeApi";

export default async function getPokemonHabitats(
  id: number
): Promise<IPokemonHabitat> {
  const url: string = "https://pokeapi.co/api/v2/pokemon-habitat/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
