import { createContext, useState, useContext } from "react";

const authState = {
  token: "",
  setToken: () => {},
};

const AuthContext = createContext(authState);

function AuthProvider({ children }) {
  const [token, setToken] = useState("");

  return (
    <AuthContext.Provider
      value={{
        token: token,
        setToken: (token) => setToken(token),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { useAuth, AuthProvider };
