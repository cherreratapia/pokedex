import axios from "axios";
import { IPokedex } from "../interfaces/PokeApi";

export default async function getPokedexes(id: number): Promise<IPokedex> {
  const url: string = "https://pokeapi.co/api/v2/pokedex/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
