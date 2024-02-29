"use client";

import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import AuthReducer, {
  AuthAction,
  initialState,
  AuthState,
} from "@/reducers/authReducer";
import Cookies from "js-cookie";
interface AuthContextProps {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    const storedIsAuthenticated = Cookies.get("isAuthenticated");
    if (state.isAuthenticated === false) {
      Cookies.set("isAuthenticated", "false");
    } else {
      Cookies.set("isAuthenticated", "true");
      localStorage.setItem("storedAuth", JSON.stringify(state));
    }
  }, [state]);

  useEffect(() => {
    const storedAuth = localStorage.getItem("storedAuth");
    if (storedAuth) {
      dispatch({ type: "LOGIN", payload: JSON.parse(storedAuth) });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
