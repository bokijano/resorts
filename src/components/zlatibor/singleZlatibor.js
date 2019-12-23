import React, { Component } from "react";
import SingleRoom from "../hero/Rooms.js";
import data from "./dataZlatibor.js";

import Economy from "./rooms zlatibor/single-economy.jpg";
import Standard from "./rooms zlatibor/single-standard.jpg";
import Luxury from "./rooms zlatibor/single-luxury.jpg";

export default class doubleZlatibor extends Component {
  state = {
    data: data.single,
    roomsImg: [Economy, Standard, Luxury],
    name: "Single Rooms",
    link: "/zlatibor"
  };
  render() {
    return (
      <div style={{ marginTop: "120px" }}>
        <SingleRoom
          rooms={this.state.data}
          roomsImg={this.state.roomsImg}
          name={this.state.name}
          link={this.state.link}
        />
      </div>
    );
  }
}
