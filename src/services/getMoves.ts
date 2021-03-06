import axios from "axios";
import { IMove } from "../interfaces/PokeApi";

export default async function getMoves(id: number): Promise<IMove> {
  const url: string = "https://pokeapi.co/api/v2/move/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
