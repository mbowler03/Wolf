import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewRound from "./pages/NewRound";
import About from "./pages/About";
import Hole from "./pages/Hole";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
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
          <Route exact path="/hole" component={Hole} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
