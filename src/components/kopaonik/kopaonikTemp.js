import React, { Component } from "react";

export default class kopaonikTemp extends Component {
  render() {
    const { temperature, icon } = this.props.temp;
    const { toCelsius, getForecastIcon, convertUnix } = this.props.value;
    return (
      <div className="mountain-pos">
        <h1>Kopaonik</h1>
        <div className="temperature-content">
          <img
            className="temp-icon"
            src={getForecastIcon(icon)}
            alt="kopaonik icon"
          />
          <h3 className="temperature-degree">{toCelsius(temperature)}</h3>
          <span className="degree-temp">C</span>
          <button type="button">next five days forecast</button>
        </div>
      </div>
    );
  }
}
