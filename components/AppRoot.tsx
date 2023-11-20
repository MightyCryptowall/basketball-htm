"use client"
import AuthProvider from "@/provider/AuthProvider";
import PlayerProvider from "@/provider/PlayerProvider";
import TeamProvider from "@/provider/TeamProvider";
import { ReactNode } from "react";

interface AppRootProps {
  children: ReactNode | ReactNode[];
}

const AppRoot: React.FC<AppRootProps> = ({ children }) => {
  return (
    <AuthProvider>
      <PlayerProvider>
        <TeamProvider>{children}</TeamProvider>
      </PlayerProvider>
    </AuthProvider>
  );
};

export default AppRoot;
