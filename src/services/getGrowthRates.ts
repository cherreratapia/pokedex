import axios from "axios";
import { IGrowthRate } from "../interfaces/PokeApi";

export default async function getGrowthRates(id: number): Promise<IGrowthRate> {
  const url: string = "https://pokeapi.co/api/v2/growth-rate/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
