import axios from "axios";
import { ISuperContestEffect } from "../interfaces/PokeApi";

export default async function getSuperContestEffects(
  id: number
): Promise<ISuperContestEffect> {
  const url: string =
    "https://pokeapi.co/api/v2/super-contest-effect/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
