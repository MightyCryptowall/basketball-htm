"use client";
import { TeamContext } from "@/provider/TeamProvider";
import { useContext } from "react";

interface TeamsProps {
    
}
 
const Teams: React.FC<TeamsProps> = () => {
    const {data} = useContext(TeamContext);
    return ( 
        <main className="w-screen h-screen flex justify-center items-center">
            {JSON.stringify(data)}
        </main>
     );
}
 
export default Teams;