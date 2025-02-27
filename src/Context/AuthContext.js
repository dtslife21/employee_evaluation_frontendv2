import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [request_token, setAuthToken] = useState(
    localStorage.getItem("request_token") || null
  );

  useEffect(() => {
    if (request_token) {
      localStorage.setItem("request_token", request_token);
    } else {
      localStorage.removeItem("request_token");
    }
  }, [request_token]);

  const login = (token) => {
    setAuthToken(token);
  };

  const logout = () => {
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ request_token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
