import axios from "axios";
import { INature } from "../interfaces/PokeApi";

export default async function getNatures(id: number): Promise<INature> {
  const url: string = "https://pokeapi.co/api/v2/nature/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
