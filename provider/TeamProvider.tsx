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

interface TeamProviderProps {
  children: ReactNode | ReactNode[];
}
export const TeamContext = createContext(
  {} as {
    data: any;
    setData: Dispatch<any>;
  }
);
const TeamProvider: React.FC<TeamProviderProps> = ({ children }) => {
  const { data, setData } = useFetchData("https://www.balldontlie.io/api/v1/teams");

  return (
    <TeamContext.Provider value={{ data, setData }}>
      <div>{children}</div>
    </TeamContext.Provider>
  );
};

export default TeamProvider;
