import axios from "axios";
import { IMoveDamageClass } from "../interfaces/PokeApi";

export default async function getMoveDamageClasses(
  id: number
): Promise<IMoveDamageClass> {
  const url: string =
    "https://pokeapi.co/api/v2/move-damage-class/" + String(id);
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
