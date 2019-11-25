import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";
import TemperatureCurrently from "./../temp files/temperatureCurrently.js";
import zlatiborBack from "./../../images/Zlatibor/zlatiborBack.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Service from "./../hero/Services.js";

export default class zlatibor extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div>
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
            <Service />
          </div>
        )}
      </ProductConsumer>
    );
  }
}
