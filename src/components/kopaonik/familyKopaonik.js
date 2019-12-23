import React, { Component } from "react";
import FamilyRoom from "../hero/Rooms.js";
import data from "./dataKopaonik.js";

import Economy from "./rooms kopaonik/family-economy.jpg";
import Standard from "./rooms kopaonik/family-standard.jpg";
import Luxury from "./rooms kopaonik/family-luxury.jpg";

export default class singleKopaonik extends Component {
  state = {
    data: data.family,
    roomsImg: [Economy, Standard, Luxury],
    name: "Family Rooms",
    link: "/kopaonik"
  }
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
