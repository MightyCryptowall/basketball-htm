"use client";

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface AuthProviderProps {
  children: ReactNode | ReactNode[];
}

export const AuthContext = createContext(
  {} as {
    loginUser: string | null;
    setLoginUser: Dispatch<SetStateAction<string | null>>

  }
);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [loginUser, setLoginUser] = useState<string | null>("ye thiha");
  return (
    <AuthContext.Provider value={{ loginUser, setLoginUser }}>
      <div className="border-4 border-teal-500 m-5">{children}</div>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
