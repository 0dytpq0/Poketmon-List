"use client";
import getPokemon from "@/containers/getPokemon";
import { PokemonsType } from "@/types/pokemonType";
import { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard";

function PokemonList() {
  const [pokemon, setPokemon] = useState<PokemonsType[]>([]);

  useEffect(() => {
    const getPokemonData = async () => {
      const newPokemon = await getPokemon();
      setPokemon(newPokemon);
    };
    getPokemonData();
  }, []);
  console.log("pokemons", pokemon);

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      <PokemonCard name="이상해씨" pokemonImg="src" pokemonNum={5} />
      <PokemonCard name="이상해씨" pokemonImg="src" pokemonNum={5} />
      <PokemonCard name="이상해씨" pokemonImg="src" pokemonNum={5} />
      <PokemonCard name="이상해씨" pokemonImg="src" pokemonNum={5} />
      <PokemonCard name="이상해씨" pokemonImg="src" pokemonNum={5} />
    </div>
  );
}

export default PokemonList;
