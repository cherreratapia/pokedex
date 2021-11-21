import axios from "axios";
import { IBerryFirmness } from "../interfaces/PokeApi";

export default async function getBerryFirmnesses(
  id: number
): Promise<IBerryFirmness> {
  const url: string = "https://pokeapi.co/api/v2/berry-firmness/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
