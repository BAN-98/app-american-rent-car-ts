import React, { createContext, useContext, useState } from "react";
import { FieldValues } from "react-hook-form";
import { registerUser } from "../api/auth";

interface AuthContextType {
  user: any | null;
  setUser: (user: any) => void;
  token: string;
  setToken: (token: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  logout: () => void;
  login: (email: string, password: string) => void;
  register: (user: FieldValues) => Promise<void>;
}

const defaultContext: AuthContextType = {
  user: {},
  setUser: () => {},
  token: "",
  setToken: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  logout: () => {},
  login: () => {},
  register: async () => {},
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
export const AuthContext = createContext<AuthContextType>(defaultContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(defaultContext.user || null);
  const [token, setToken] = useState(defaultContext.token);
  const [isLoggedIn, setIsLoggedIn] = useState(defaultContext.isLoggedIn);

  const logout = () => {
    setUser({});
    setToken("");
    setIsLoggedIn(false);
  };

  const login = async (email: string, password: string) => {};

  const register = async (user: FieldValues) => {
    const res = await registerUser(user);
    console.log(res.data);
    setUser(res.data);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        isLoggedIn,
        setIsLoggedIn,
        logout,
        login,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
