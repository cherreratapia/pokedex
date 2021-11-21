import axios from "axios";
import { IVersion } from "../interfaces/PokeApi";

export default async function getVersion(id: number): Promise<IVersion> {
  const url: string = "https://pokeapi.co/api/v2/version/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
