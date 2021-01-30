import { useReactiveVar } from "@apollo/client";
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { themeVar } from "./context/apollo";
import { useAuth } from "./context/auth";
import { DefaultPage } from "./routes/default/DefaultPage";

// Routes
import HomePage from "./routes/home/HomePage";
import LoginPage from "./routes/login/LoginPage";

function App() {
  const auth = useAuth();
  const theme = useReactiveVar(themeVar);

  return (
    <Router>
      <pre>auth: {auth.token}</pre>
      <pre>theme: {theme}</pre>
      <Switch>
        <Route path="/login" component={LoginPage}></Route>
        <ProtectedRoutes>
          <Route path="/home" component={HomePage}></Route>
          <Route path="**" component={DefaultPage}></Route>
        </ProtectedRoutes>

        <Route
          path="**"
          render={() =>
            auth.token === "" ? (
              <Redirect to="/login"></Redirect>
            ) : (
              <Redirect to="/home"></Redirect>
            )
          }
        ></Route>
      </Switch>
    </Router>
  );
}

function ProtectedRoutes({ children }) {
  const auth = useAuth();

  return (
    <Route
      render={() =>
        auth.token === "" ? <Redirect to="/login"></Redirect> : children
      }
    ></Route>
  );
}

export default App;
