import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";
import TemperatureCurrently from "./../temp files/temperatureCurrently.js";

export default class kopaonik extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <TemperatureCurrently
           mountain={value.mountains[0]}
           temp={value.dataKopaonik} value={value} />
        )}
      </ProductConsumer>
    );
  }
}
