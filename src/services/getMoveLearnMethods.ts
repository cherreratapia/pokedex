import axios from "axios";
import { IMoveLearnMethod } from "../interfaces/PokeApi";

export default async function getMoveLearnMethods(
  id: number
): Promise<IMoveLearnMethod> {
  const url: string =
    "https://pokeapi.co/api/v2/move-learn-method/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
