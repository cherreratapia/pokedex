import axios from "axios";
import { INamedAPIResourceList } from "../interfaces/PokeApi";

export default async function getNamed(
  id: number
): Promise<INamedAPIResourceList> {
  const url: string = "https://pokeapi.co/api/v2/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
