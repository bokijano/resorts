import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";
import TemperatureCurrently from "./../temp files/temperatureCurrently.js";
import kopaonikBack from "./../../images/Kopaonik/kopaonikBack.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Service from "./../hero/Services.js";
import ButtonContainer from "./../Button.js";
import Title from "./../hero/Title.js";
import { Link } from "react-router-dom";
import FeaturedRooms from "./../hero/FeaturedRooms.js";
import Single from "./../../images/Kopaonik/rooms/single/singleKopaonik.jpg";
import Double from "./../../images/Kopaonik/rooms/double/doubleKopaonik.jpg";
import Family from "./../../images/Kopaonik/rooms/family/familyKopaonik.jpg";

export default class kopaonik extends Component {
  state = {
    rooms: [
      { id: 1, src: Single, price: 29, title: "single room" },
      { id: 2, src: Double, price: 49, title: "double room" },
      { id: 3, src: Family, price: 70, title: "family room" }
    ]
  };
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div className="mountain-pict">
            <TemperatureCurrently
              mountain={value.mountains[0]}
              temp={value.dataKopaonik}
              value={value}
            />
            <img
              src={kopaonikBack}
              alt="kopaonik background"
              className="img-fluid back-img"
            />
            <div className="rooms">
              <Title mountain="kopaonik" price="29" />
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
