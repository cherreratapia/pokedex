import axios from "axios";
import { IBerryFlavorMap } from "../interfaces/PokeApi";

export default async function getBerryFlavors(
  id: number
): Promise<IBerryFlavorMap> {
  const url: string = "https://pokeapi.co/api/v2/berry-flavor/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
