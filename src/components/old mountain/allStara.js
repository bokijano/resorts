import React, { Component } from "react";
import Single from "./singleStara.js";
import Double from "./doubleStara.js";
import Family from "./familyStara.js";
import Button from "../Button.js";
import { Link } from "react-router-dom";

export default class allStara extends Component {
  render() {
    return (
      <React.Fragment>
        <Single />
        <Double />
        <Family />
        <Link to="/staraPlanina">
          <Button style={{ margin: "10px 50px" }}>back to main page</Button>
        </Link>
      </React.Fragment>
    );
  }
}
