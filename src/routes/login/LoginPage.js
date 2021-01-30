import React from "react";
import { useAuth } from "../../context/auth";
import { v4 as uuid } from "uuid";
import { Redirect } from "react-router-dom";

function LoginPage() {
  const auth = useAuth();

  const login = () => {
    auth.setToken(uuid());
  };

  if (auth.token !== "") {
    return <Redirect to="/home"></Redirect>;
  }

  return (
    <section>
      <h1>Log In</h1>
      <button onClick={login}>Login</button>
    </section>
  );
}

export default LoginPage;
