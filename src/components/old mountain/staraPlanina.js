import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";
import TemperatureCurrently from "./../temp files/temperatureCurrently.js";
import stara from "./../../images/Stara/staraBack.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Service from "./../hero/Services.js";
import ButtonContainer from "./../Button.js";
import Title from "./../hero/Title.js";
import { Link } from "react-router-dom";
import FeaturedRooms from "./../hero/FeaturedRooms.js";
import Single from "./../../images/Stara/rooms/single/singleStara.jpg";
import Double from "./../../images/Stara/rooms/double/doubleStara.jpg";
import Family from "./../../images/Stara/rooms/family/familyStara.jpg";

export default class staraPlanina extends Component {
  state = {
    rooms: [
      {
        id: 1,
        src: Single,
        price: 15,
        title: "single room",
        link: "/singleStara"
      },
      {
        id: 2,
        src: Double,
        price: 25,
        title: "double room",
        link: "/doubleStara"
      },
      {
        id: 3,
        src: Family,
        price: 40,
        title: "family room",
        link: "/familyStara"
      }
    ]
  };
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div className="mountain-pict">
            <TemperatureCurrently
              mountain={value.mountains[2]}
              temp={value.dataStara}
              value={value}
            />
            <img
              src={stara}
              alt="stara planina background"
              className="img-fluid back-img"
            />
            <div className="rooms">
              <Title mountain="stara planina" price="15" />
              <div className="rooms-choose">
                <ButtonContainer>
                  <Link to="/allStara">see all rooms</Link>
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
