import React, { Component } from "react";
import SingleRoom from "../hero/Rooms.js";
import data from "./dataStara.js";

import Economy from "./rooms stara/single-economy.jpg";
import Standard from "./rooms stara/single-standard.jpg";
import Luxury from "./rooms stara/single-luxury.jpg";

export default class singleStara extends Component {
  state = {
    data: data.single,
    roomsImg: [Economy, Standard, Luxury],
    name: "Single Rooms",
    link: "/zlatibor"
  };
  render() {
    return (
      <div style={{ marginTop: "100px" }}>
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
