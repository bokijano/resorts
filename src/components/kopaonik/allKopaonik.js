import React, { Component } from "react";
import Single from "./singleKopaonik.js";
import Double from "./doubleKopaonik.js";
import Family from "./familyKopaonik.js";
import Button from "../Button.js";
import { Link } from "react-router-dom";

export default class allKopaonik extends Component {
  render() {
    return (
      <React.Fragment>
        <Single />
        <Double />
        <Family />
        <Link to="/kopaonik">
          <Button style={{ margin: "10px 50px" }}>back to main page</Button>
        </Link>
      </React.Fragment>
    );
  }
}
