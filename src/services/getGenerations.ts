import axios from "axios";
import { IGeneration } from "../interfaces/PokeApi";

export default async function getGenerations(id: number): Promise<IGeneration> {
  const url: string = "https://pokeapi.co/api/v2/generation/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
