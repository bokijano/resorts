import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar.js";

import Home from "./pages/Home.js";
import Rooms from "./pages/Rooms.js";
import SingleRoom from "./pages/SingleRoom.js";
import Error from "./pages/Error.js";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:single" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
