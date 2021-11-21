import axios from "axios";
import { IEncounterMethod } from "../interfaces/PokeApi";

export default async function getEncounterMethods(
  id: number
): Promise<IEncounterMethod> {
  const url: string =
    "https://pokeapi.co/api/v2/encounter-method/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
