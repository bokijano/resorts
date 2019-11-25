import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";
import TemperatureCurrently from "./../temp files/temperatureCurrently.js";
import zlatiborBack from "./../../images/Zlatibor/zlatiborBack.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Service from "./../hero/Services.js";
import ButtonContainer from "./../Button.js";
import Title from "./../hero/Title.js";
import { Link } from "react-router-dom";

export default class zlatibor extends Component {
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
                  <Link to="/rooms">regular rooms</Link>
                </ButtonContainer>
                <ButtonContainer>
                  <Link to="/rooms">luxury rooms</Link>
                </ButtonContainer>
              </div>
            </div>
            <Service />
          </div>
        )}
      </ProductConsumer>
    );
  }
}
