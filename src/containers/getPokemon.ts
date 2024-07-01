import api from "@/services/api";

async function getPokemon() {
  const data = await api.pokemon.getPokemons();
  return data;
}

export default getPokemon;
