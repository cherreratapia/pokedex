import axios from "axios";
import { IEncounterConditionValue } from "../interfaces/PokeApi";

export default async function getEncounterConditionValues(
  id: number
): Promise<IEncounterConditionValue> {
  const url: string =
    "https://pokeapi.co/api/v2/encounter-condition-value/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
