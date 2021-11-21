import axios from "axios";
import { IItemCategory } from "../interfaces/PokeApi";

export default async function getItemCategories(
  id: number
): Promise<IItemCategory> {
  const url: string = "https://pokeapi.co/api/v2/item-category/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
