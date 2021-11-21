import axios from "axios";
import { IMoveAilment } from "../interfaces/PokeApi";

export default async function getMoveAilments(
  id: number
): Promise<IMoveAilment> {
  const url: string = "https://pokeapi.co/api/v2/move-ailment/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
