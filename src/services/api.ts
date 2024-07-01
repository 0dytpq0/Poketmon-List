import axios, { AxiosInstance } from "axios";
import Poketmon from "./poketmon";

class API {
  private axios: AxiosInstance;

  poketmon;

  constructor() {
    this.axios = axios.create({ baseURL: "http://localhost:3000" });
    this.poketmon = new Poketmon(this.axios);
  }
}

const api = new API();

export default api;
