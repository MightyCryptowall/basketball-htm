"use client"
import AuthProvider from "@/provider/AuthProvider";
import PlayerProvider from "@/provider/PlayerProvider";
import TeamProvider from "@/provider/TeamProvider";
import ThemeProvider from "@/provider/ThemeProvider";
import { ReactNode } from "react";

interface AppRootProps {
  children: ReactNode | ReactNode[];
}

const AppRoot: React.FC<AppRootProps> = ({ children }) => {
  return (
    <ThemeProvider>
    <AuthProvider>
      <PlayerProvider>
        <TeamProvider>{children}</TeamProvider>
      </PlayerProvider>
    </AuthProvider>
    </ThemeProvider>
  );
};

export default AppRoot;
