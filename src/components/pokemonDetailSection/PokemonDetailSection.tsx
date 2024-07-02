"use client";
import { usePokemon } from "@/services/usePokemon.service";
import Image from "next/image";
import { useParams } from "next/navigation";

function PokemonDetailSection() {
  const params = useParams<{ tag: string; pokemonId: string }>();
  const { data: pokemon } = usePokemon(Number(params?.pokemonId));
  console.log("pokemon", pokemon);

  return (
    <div>
      <h1>{pokemon?.korean_name}</h1>
      <div className="relative flex items-center justify-center w-full h-1/2">
        <Image
          className="object-contain w-20 h-auto mb-4 aspect-auto"
          alt={pokemon?.korean_name}
          src={pokemon?.sprites.front_default}
          width={100}
          height={100}
        />
      </div>
      {pokemon?.id}
    </div>
  );
}

export default PokemonDetailSection;
