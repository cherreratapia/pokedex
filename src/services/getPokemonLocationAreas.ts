import axios from "axios";
import { ILocationAreaEncounter } from "../interfaces/PokeApi";

export default async function getPokemonLocationAreas(
  id: number
): Promise<ILocationAreaEncounter> {
  const url: string = `https://pokeapi.co/api/v2/pokemon/${String(
    id
  )}/encounters/`;
  try {
    const { data } = await axios({
      url,
      method: "GET",
    });
    return data;
  } catch (error) {
    console.error("error", error);
    return null;
  }
}
