import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";
import KopaonikTemp from "./kopaonikTemp.js";

export default class kopaonik extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <KopaonikTemp temp={value.dataKopaonik} value={value} />
        )}
      </ProductConsumer>
    );
  }
}
