import axios from "axios";
import { IEncounterCondition } from "../interfaces/PokeApi";

export default async function getEncounterConditions(
  id: number
): Promise<IEncounterCondition> {
  const url: string =
    "https://pokeapi.co/api/v2/encounter-condition/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
