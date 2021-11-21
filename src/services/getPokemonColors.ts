import axios from "axios";
import { IPokemonColor } from "../interfaces/PokeApi";

export default async function getPokemonColors(
  id: number
): Promise<IPokemonColor> {
  const url: string = "https://pokeapi.co/api/v2/pokemon-color/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
