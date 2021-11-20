import axios from "axios";

export default async function request(url: string) {
  const { data } = await axios({
    url,
    method: "GET",
  });
  return data;
}
