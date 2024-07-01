import { AxiosInstance } from "axios";

class Poketmon {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getPoketmons() {
    const path = "/poketmons";

    const res = await this.axios.get(path);
    const data = res.data;
    return data;
  }
}

export default Poketmon;
