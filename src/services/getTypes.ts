import axios from "axios";
import { IContestType } from "../interfaces/PokeApi";

export default async function getTypes(id: number): Promise<IContestType> {
  const url: string = "https://pokeapi.co/api/v2/type/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
