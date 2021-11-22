import axios from "axios";
import { IAbility } from "../interfaces/PokeApi";

export default async function getAbilities(
  query: string | number
): Promise<IAbility> {
  const url: string = "https://pokeapi.co/api/v2/ability/" + String(query);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
