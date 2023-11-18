import axios from "axios";
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

interface PlayerProviderProps {
    children: ReactNode  | ReactNode[]
}
 export const playerContext = createContext(
    {} as {
        data: any;
        setData: Dispatch<any>
    }
 )
const PlayerProvider: React.FC<PlayerProviderProps> = ({children}) => {
    const[data,setData] = useState<any>([])
  const fetchData =async () => {
    const Player_data =await axios.get(
      "https://www.balldontlie.io/api/v1/players"
    )
    console.log(Player_data.data.data)
    setData(Player_data.data.data);
  }

  useEffect(()=>{
    fetchData();
  },[])
   
    return ( 
        <playerContext.Provider value={{data,setData}}>
            <div>{children}</div>
        </playerContext.Provider>
     );
}
 
export default PlayerProvider;