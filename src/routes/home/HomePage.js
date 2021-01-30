import React from "react";
import { useAuth } from "../../context/auth";
import { themeVar } from "../../context/apollo";
import { useReactiveVar } from "@apollo/client";

function HomePage() {
  const auth = useAuth();
  const theme = useReactiveVar(themeVar);

  const logout = () => {
    auth.setToken("");
  };

  const toggleTheme = () => {
    if (theme === "light") {
      themeVar("dark");
    } else {
      themeVar("light");
    }
  };

  return (
    <section>
      <h1>Home Page</h1>
      <button onClick={logout}>Logout</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </section>
  );
}

export default HomePage;
