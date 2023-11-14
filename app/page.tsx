"use client";

import CardItem from "@/components/CardItem";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>([]);

  const fetchData = async () => {
    const player_data = await axios.get(
      "https://www.balldontlie.io/api/v1/players"
    );
    console.log(player_data.data.data);
    setData(player_data.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="">
      <h1 className="text-center py-5 text-2xl">Basketball App</h1>
      <div className="grid grid-cols-3 w-[50%] mx-auto gap-5">
        {data?.map((item: any) => (
          <CardItem
            name={item.first_name}
            height_feet={item.height_feet}
            key={item.id}
          />
        ))}
      </div>
    </main>
  );
}
