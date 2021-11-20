import axios from "axios";
import { IAbility } from "../interfaces/PokeApi";

export default async function getAbilities(id: number): Promise<IAbility> {
  const url: string = "https://pokeapi.co/api/v2/ability/" + String(id);
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
