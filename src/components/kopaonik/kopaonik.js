import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";
import TemperatureCurrently from "./../temp files/temperatureCurrently.js";
import kopaonikBack from "./../../images/Kopaonik/kopaonikBack.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Service from "./../hero/Services.js";

export default class kopaonik extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div>
            <TemperatureCurrently
              mountain={value.mountains[0]}
              temp={value.dataKopaonik}
              value={value}
            />
            {/*<img
              src={kopaonikBack}
              alt="kopaonik background"
              className="img-fluid back-img"
            />*/}
            <Service />
          </div>
        )}
      </ProductConsumer>
    );
  }
}
