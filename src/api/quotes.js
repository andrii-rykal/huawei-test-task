import { client } from "./httpClient"

export const getQuote = () => {
  return client.get('/random', {
    method: "GET",
    redirect: "follow"
  });
}