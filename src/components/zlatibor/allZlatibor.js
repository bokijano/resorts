import React, { Component } from "react";
import Single from "./singleZlatibor.js";
import Double from "./doubleZlatibor.js";
import Family from "./familyZlatibor.js";
import Button from "../Button.js";
import { Link } from "react-router-dom";

export default class allKopaonik extends Component {
  render() {
    return (
      <React.Fragment>
        <Single />
        <Double />
        <Family />
        <Link to="/zlatibor">
          <Button style={{ margin: "10px 50px" }}>back to main page</Button>
        </Link>
      </React.Fragment>
    );
  }
}
