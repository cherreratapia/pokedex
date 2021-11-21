import axios from "axios";
import { IContestEffect } from "../interfaces/PokeApi";

export default async function getContestEffects(
  id: number
): Promise<IContestEffect> {
  const url: string = "https://pokeapi.co/api/v2/contest-effect/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
