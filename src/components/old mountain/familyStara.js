import React, { Component } from "react";
import FamilyRoom from "../hero/Rooms.js";
import data from "./dataStara.js";

import Economy from "./rooms stara/family-economy.jpg";
import Standard from "./rooms stara/family-standard.jpg";
import Luxury from "./rooms stara/family-luxury.jpg";

export default class dfamilyStara extends Component {
  state = {
    data: data.family,
    roomsImg: [Economy, Standard, Luxury],
    name: "Family Rooms",
    link: "/staraPlanina"
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
