import axios from "axios";

console.log(process.env);
const client = axios.create({
  baseURL: process.env.REACT_APP_OMDB_BASE_URL,
  params: { apikey: process.env.REACT_APP_OMDB_API_KEY },
});

export default client;
