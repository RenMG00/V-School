import React from "react"
import { Link, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Footer from "./components/Footer"
import MovieDetails from "./pages/MovieDetails"
import DataManager from "./components/DataManager"


function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movieDetails">Movie-Details</Link>
        <Link to="/collection">Collection</Link>
      </nav>
      <Switch>
        <DataManager>
        <Route exact path="/" component={Home}></Route>
        <Route path="/movieDetails" component={MovieDetails}></Route>
        <Route path="/collection" component={Collection}></Route>
        </DataManager>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
