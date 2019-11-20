import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar.js";
import { ProductConsumer } from "./Context.js";

import Home from "./pages/Home.js";
import Kopaonik from "./components/kopaonik/kopaonik.js";
import Zlatibor from "./components/zlatibor/zlatibor.js";
import StaraPlanina from "./components/old mountain/staraPlanina.js";
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
              <Home />) : (
              <Switch>
                <Route exact path="/" component={Home} />
                {/*<Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:single" component={SingleRoom} />*/}
                <Route exact path="/kopaonik" component={Kopaonik} />
                <Route exact path="/zlatibor" component={Zlatibor} />
                <Route exact path="/staraPlanina" component={StaraPlanina} />
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
