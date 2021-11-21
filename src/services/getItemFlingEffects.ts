import axios from "axios";
import { IItemFlingEffect } from "../interfaces/PokeApi";

export default async function getItemFlingEffects(
  id: number
): Promise<IItemFlingEffect> {
  const url: string =
    "https://pokeapi.co/api/v2/item-fling-effect/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
