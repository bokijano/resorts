import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar.js";
import { ProductConsumer } from "./Context.js";

import Home from "./pages/Home.js";

import Kopaonik from "./components/kopaonik/kopaonik.js";
import SingleKopaonik from "./components/kopaonik/singleKopaonik.js";
import DoubleKopaonik from "./components/kopaonik/doubleKopaonik.js";
import FamilyKopaonik from "./components/kopaonik/familyKopaonik.js";
import AllRoomsKopaonik from "./components/kopaonik/allKopaonik.js";

import Zlatibor from "./components/zlatibor/zlatibor.js";
import SingleZlatibor from "./components/zlatibor/singleZlatibor.js";
import DoubleZlatibor from "./components/zlatibor/doubleZlatibor.js";
import FamilyZlatibor from "./components/zlatibor/familyZlatibor.js";
import AllRoomsZlatibor from "./components/zlatibor/allZlatibor.js";

import StaraPlanina from "./components/old mountain/staraPlanina.js";
import SingleStara from "./components/old mountain/singleStara.js";
import DoubleStara from "./components/old mountain/doubleStara.js";
import FamilyStara from "./components/old mountain/familyStara.js";
import AllRoomsStara from "./components/old mountain/allStara.js";

import Error from "./pages/Error.js";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <React.Fragment>
            <Navbar />
            {value.displayHomePage ? (
              <Home />
            ) : (
              <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/kopaonik" component={Kopaonik} />
                <Route
                  exath
                  path="/singleKopaonik"
                  component={SingleKopaonik}
                />
                <Route
                  exath
                  path="/doubleKopaonik"
                  component={DoubleKopaonik}
                />
                <Route
                  exath
                  path="/familyKopaonik"
                  component={FamilyKopaonik}
                />
                <Route exact path="/allKoponik" component={AllRoomsKopaonik} />

                <Route exact path="/zlatibor" component={Zlatibor} />
                <Route
                  exath
                  path="/singleZlatibor"
                  component={SingleZlatibor}
                />
                <Route
                  exath
                  path="/doubleZlatibor"
                  component={DoubleZlatibor}
                />
                <Route
                  exath
                  path="/familyZlatibor"
                  component={FamilyZlatibor}
                />
                <Route exath path="/allZlatibor" component={AllRoomsZlatibor} />

                <Route exact path="/staraPlanina" component={StaraPlanina} />
                <Route exact path="/singleStara" component={SingleStara} />
                <Route exath path="/doubleStara" component={DoubleStara} />
                <Route exath path="/familyStara" component={FamilyStara} />
                <Route exath path="/allStara" component={AllRoomsStara} />
                <Route component={Error} />
              </Switch>
            )}
          </React.Fragment>
        )}
      </ProductConsumer>
    );
  }
}

export default App;
