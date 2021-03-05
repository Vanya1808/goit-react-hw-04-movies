  
import "./App.css";
import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import routes from "./routes";
import HomePage from "./pages/HomePage";
import DetailsPage from './pages/DetailsPage'

const MovieDetailsPage = lazy(() => import("./pages/DetailsPage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.Details} component={DetailsPage} />
      </Switch>
    </>
  );
}

export default App;