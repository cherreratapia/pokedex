import axios from "axios";

export default async function getCommonModels(id: number): Promise<undefined> {
  const url: string = "https://pokeapi.co/api/" + String(id);
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
