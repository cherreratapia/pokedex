import axios from "axios";
import { IGender } from "../interfaces/PokeApi";

export default async function getGenders(id: number): Promise<IGender> {
  const url: string = "https://pokeapi.co/api/v2/gender/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
