import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";
import TemperatureCurrently from "./../temp files/temperatureCurrently.js";
import stara from "./../../images/staraBack.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Service from "./../hero/Services.js";

export default class staraPlanina extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div>
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
            <Service />
          </div>
        )}
      </ProductConsumer>
    );
  }
}
