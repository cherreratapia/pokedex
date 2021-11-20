import axios from "axios";
import { IBerry } from "../interfaces/PokeApi";

export default async function getBerries(id: number): Promise<IBerry> {
  const url: string = "https://pokeapi.co/api/v2/berry/" + String(id);
  try {
    const { data } = await axios({
      url,
      method: "GET",
    });
    return data;
  } catch (error) {
    console.error("error", error);
    return null;
  }
}
