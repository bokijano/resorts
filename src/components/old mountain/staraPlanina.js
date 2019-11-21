import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";
import TemperatureCurrently from "./../temp files/temperatureCurrently.js";

export default class staraPlanina extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <TemperatureCurrently
            mountain={value.mountains[2]}
            temp={value.dataStara}
            value={value}
          />
        )}
      </ProductConsumer>
    );
  }
}
