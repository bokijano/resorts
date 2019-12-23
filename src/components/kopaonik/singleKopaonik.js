import React, { Component } from "react";
import SingleRoom from "../hero/Rooms.js";
import data from "./dataKopaonik.js";

import SingleEconomy from "./rooms kopaonik/single-economy.jpg";
import SingleStandard from "./rooms kopaonik/single-standard.jpg";
import SingleLuxury from "./rooms kopaonik/single-luxury.jpg";

export default class singleKopaonik extends Component {
  state = {
    data: data.single,
    roomsImg: [SingleEconomy, SingleStandard, SingleLuxury],
    name: "Single Rooms",
    link: "/kopaonik"
  };
  dataDisplay = () => {
    console.log(this.state.data);
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
