import api from "@/services/api";

async function getPoketmon() {
  const data = await api.poketmon.getPoketmons();
  return data;
}

export default getPoketmon;
