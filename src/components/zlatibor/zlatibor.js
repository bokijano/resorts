import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";
import TemperatureCurrently from "./../temp files/temperatureCurrently.js";
import zlatiborBack from "./../../images/Zlatibor/zlatiborBack.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Service from "./../hero/Services.js";
import ButtonContainer from "./../Button.js";
import Title from "./../hero/Title.js";
import { Link } from "react-router-dom";
import FeaturedRooms from "./../hero/FeaturedRooms.js";
import Single from "./../../images/Zlatibor/rooms/single/singleZlatibor.jpg";
import Double from "./../../images/Zlatibor/rooms/double/doubleZlatibor.jpg";
import Family from "./../../images/Zlatibor/rooms/family/familyZlatibor.jpg";

export default class zlatibor extends Component {
  state = {
    rooms: [
      { id: 1, src: Single, price: 20, title: "single room" },
      { id: 2, src: Double, price: 35, title: "double room" },
      { id: 3, src: Family, price: 50, title: "family room" }
    ]
  };
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div className="mountain-pict">
            <TemperatureCurrently
              mountain={value.mountains[1]}
              temp={value.dataZlatibor}
              value={value}
            />
            <img
              src={zlatiborBack}
              alt="zlatibor background"
              className="img-fluid back-img"
            />
            <div className="rooms">
              <Title mountain="zlatibor" price="20" />
              <div className="rooms-choose">
                <ButtonContainer>
                  <Link to="/rooms">see all rooms</Link>
                </ButtonContainer>
              </div>
            </div>
            <Service />
            <FeaturedRooms rooms={this.state.rooms} />
          </div>
        )}
      </ProductConsumer>
    );
  }
}
