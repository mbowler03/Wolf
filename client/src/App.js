import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewRound from "./pages/NewRound";
import About from "./pages/About";
import BeginHole from "./pages/BeginHole";
import EndHole from "./pages/EndHole";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import PlayerSelect from "./pages/PlayerSelect"
import "./App.css"



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/newround" component={NewRound} />
          <Route exact path="/playerselect" component={PlayerSelect} />
          <Route exact path="/beginhole" component={BeginHole} />
          <Route exact path="/endhole" component={EndHole} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
