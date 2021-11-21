import axios from "axios";
import { IEggGroup } from "../interfaces/PokeApi";

export default async function getEggGroups(id: number): Promise<IEggGroup> {
  const url: string = "https://pokeapi.co/api/v2/egg-group/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
