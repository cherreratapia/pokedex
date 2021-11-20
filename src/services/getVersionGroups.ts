import axios from "axios";
import { IVersionGroup } from "../interfaces/PokeApi";

export default async function getVersionGroups(
  id: number
): Promise<IVersionGroup> {
  const url: string = "https://pokeapi.co/api/v2/version-group/" + String(id);
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
