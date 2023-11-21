"use client";

import AppRoot from "@/components/AppRoot";
import CardItem from "@/components/CardItem";
import CardList from "@/components/CardList";
import LoginStatus from "@/components/LoginStatus";
import Theme from "@/components/Theme";
import AuthProvider from "@/provider/AuthProvider";
import PlayerProvider from "@/provider/PlayerProvider";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {


  return (
    <>
   
      <main className="">
        <Theme/>
       <div>
       <h1 className="text-center pt-7 text-2xl">Basketball App</h1>
        <LoginStatus/>
       </div>
       <CardList />

      
      </main>
    
      
    </>
  );
}
