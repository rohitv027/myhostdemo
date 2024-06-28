"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    //Reciving api data
    //update usestate
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <hi className="font-bold text-5xl text-center mb-5">{num}</hi>

        <button
          className="bg-red-500 text-white p-5 rounded-lg mr-2"
          onClick={() => setNum(num + 1)}
        >
          addition
        </button>

        {num > 0 && (
          <button
            className="bg-green-500 text-white p-5 rounded-lg mr-2"
            onClick={() => setNum(num - 1)}
          >
            Subtractraction
          </button>
        )}
      </div>
    </div>
  );
}
