import axios from "axios";
import { IMoveCategory } from "../interfaces/PokeApi";

export default async function getMoveCategories(
  id: number
): Promise<IMoveCategory> {
  const url: string = "https://pokeapi.co/api/v2/move-category/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
