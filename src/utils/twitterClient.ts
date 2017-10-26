import axios from "axios";

const client = axios.create({
  baseURL: "https://api.twitter.com/1.1/"
});

export default client;
