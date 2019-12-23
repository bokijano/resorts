import React, { Component } from "react";
import FamilyRoom from "../hero/Rooms.js";
import data from "./dataZlatibor.js";

import Economy from "./rooms zlatibor/family-economy.jpeg";
import Standard from "./rooms zlatibor/family-standard.jpeg";
import Luxury from "./rooms zlatibor/family-luxury.jpg";

export default class familyZlatibor extends Component {
  state = {
    data: data.family,
    roomsImg: [Economy, Standard, Luxury],
    name: "Family Rooms",
    link: "/zlatibor"
  };
  render() {
    return (
      <div style={{ marginTop: "120px" }}>
        <FamilyRoom
          rooms={this.state.data}
          roomsImg={this.state.roomsImg}
          name={this.state.name}
          link={this.state.link}
        />
      </div>
    );
  }
}
