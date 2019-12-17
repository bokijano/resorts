import React, { Component } from "react";
import DoubleRoom from "../hero/Rooms.js";
import data from "./dataZlatibor.js";

import Economy from "./rooms zlatibor/double-economy.jpg";
import Standard from "./rooms zlatibor/double-standard.jpg";
import Luxury from "./rooms zlatibor/double-luxury.jpg";

export default class doubleZlatibor extends Component {
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
