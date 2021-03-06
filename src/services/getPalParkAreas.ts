import axios from "axios";
import { IPalParkArea } from "../interfaces/PokeApi";

export default async function getPalParkAreas(
  id: number
): Promise<IPalParkArea> {
  const url: string = "https://pokeapi.co/api/v2/pal-park-area/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
