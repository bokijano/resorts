import React, { Component } from "react";
import DoubleRoom from "../hero/Rooms.js";
import data from "./dataStara.js";

import Economy from "./rooms stara/double-economy.jpg";
import Standard from "./rooms stara/double-standard.jpg";
import Luxury from "./rooms stara/double-luxury.jpg";

export default class doubleStara extends Component {
  state = {
    data: data.double,
    roomsImg: [Economy, Standard, Luxury],
    name: "Double Rooms",
    link: "/zlatibor"
  }
  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <DoubleRoom
          rooms={this.state.data}
          roomsImg={this.state.roomsImg}
          name={this.state.name}
          link={this.state.link}
        />
      </div>
    );
  }
}
