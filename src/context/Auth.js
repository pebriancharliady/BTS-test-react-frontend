import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [userToken, setUserToken] = useState('');
  useEffect(() => {
    setUserToken(window.localStorage.getItem('token'))
  }, [])
  return (
    <AuthContext.Provider value={{ userToken, setUserToken }}>
      {props.children}
    </AuthContext.Provider>
  );
}
