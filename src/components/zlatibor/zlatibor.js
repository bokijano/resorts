import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";
import TemperatureCurrently from "./../temp files/temperatureCurrently.js";

export default class zlatibor extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => 
        <TemperatureCurrently 
        mountain={value.mountains[1]}
        temp={value.dataZlatibor} value={value} />}
      </ProductConsumer>
    );
  }
}
