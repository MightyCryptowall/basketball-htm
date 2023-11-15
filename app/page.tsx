"use client";

import CardItem from "@/components/CardItem";
import LoginStatus from "@/components/LoginStatus";
import AuthProvider from "@/provider/AuthProvider";
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
    <>
    <AuthProvider>
      <main className="">
        <h1 className="text-center pt-7 text-2xl">Basketball App</h1>
        <LoginStatus/>

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
    </AuthProvider>
    
    </>
  );
}
