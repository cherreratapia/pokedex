import axios from "axios";
import { IMachine } from "../interfaces/PokeApi";

export default async function getMachines(id: number): Promise<IMachine> {
  const url: string = "https://pokeapi.co/api/v2/machine/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
