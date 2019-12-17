import React, { Component } from "react";
import DoubleRoom from "../hero/Rooms.js";
import data from "./dataKopaonik.js";

import Economy from "./rooms kopaonik/double-economy.jpg";
import Standard from "./rooms kopaonik/double-standard.jpg";
import Luxury from "./rooms kopaonik/double-luxury.jpg";

export default class singleKopaonik extends Component {
  state = {
    data: data.double,
    roomsImg: [Economy, Standard, Luxury],
    name: "Double Rooms",
    link: "/kopaonik"
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
