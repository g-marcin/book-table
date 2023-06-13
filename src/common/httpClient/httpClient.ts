import axios from "axios";

export const httpClient = axios.create({
  baseURL: `https://www.googleapis.com/books/v1`,
  timeout: 4000,
});
