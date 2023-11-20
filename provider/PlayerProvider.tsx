import useFetchData from "@/hooks/useFetchData";
import axios from "axios";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface PlayerProviderProps {
  children: ReactNode | ReactNode[];
}
export const PlayerContext = createContext(
  {} as {
    data: any;
    setData: Dispatch<any>;
  }
);
const PlayerProvider: React.FC<PlayerProviderProps> = ({ children }) => {
  const { data, setData } = useFetchData(
    "https://www.balldontlie.io/api/v1/players"
  );
  return (
    <PlayerContext.Provider value={{ data, setData }}>
      <div>{children}</div>
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
