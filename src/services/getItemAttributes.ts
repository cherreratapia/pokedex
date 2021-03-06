import axios from "axios";
import { IItemAttribute } from "../interfaces/PokeApi";

export default async function getItemAttributes(
  id: number
): Promise<IItemAttribute> {
  const url: string = "https://pokeapi.co/api/v2/item-attribute/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
