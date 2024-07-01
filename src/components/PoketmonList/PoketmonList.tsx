"use client";
import getPoketmon from "@/containers/getPoketmon";
import { useEffect, useState } from "react";
import PoketmonCard from "../PoketmonCard";

function PoketmonList() {
  const [poketmons, setPoketmons] = useState([]);

  useEffect(() => {
    const getPoketmonData = async () => {
      const newPoketmons = await getPoketmon();
      setPoketmons(newPoketmons);
    };
    getPoketmonData();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      <PoketmonCard name="이상해씨" poketmonImg="src" poketmonNum={5} />
      <PoketmonCard name="이상해씨" poketmonImg="src" poketmonNum={5} />
      <PoketmonCard name="이상해씨" poketmonImg="src" poketmonNum={5} />
      <PoketmonCard name="이상해씨" poketmonImg="src" poketmonNum={5} />
      <PoketmonCard name="이상해씨" poketmonImg="src" poketmonNum={5} />
    </div>
  );
}

export default PoketmonList;
