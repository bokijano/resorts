import React, { Component } from "react";
import "./temp.css";

export default class longTermForecast extends Component {
  render() {
    const {
      time1,
      icon1,
      tempMax1,
      tempMin1,
      summary1,
      time2,
      icon2,
      tempMax2,
      tempMin2,
      summary2,
      time3,
      icon3,
      tempMax3,
      tempMin3,
      summary3,
      time4,
      icon4,
      tempMax4,
      tempMin4,
      summary4,
      time5,
      icon5,
      tempMax5,
      tempMin5,
      summary5
    } = this.props.temp;
    const { toCelsius, getForecastIcon, convertUnix } = this.props.value;
    return (
      <div className="long-term">
        <div className="firstDay">
          <p>{convertUnix(time1)}</p>
          <div className="first">
            <img className="temp-icon" src={getForecastIcon(icon1)} alt="" />
            <div className="forecastFirst">
              <h5 className="maxTemp">
                <span id="max">{toCelsius(tempMax1)} C</span>
                <span id="text">max</span>
              </h5>
              <h5 className="minTemp">
                <span id="min">{toCelsius(tempMin1)} C</span>
                <span id="minText">min</span>
              </h5>
            </div>
          </div>
          <p>{summary1}</p>
        </div>

        <div className="firstDay">
          <p>{convertUnix(time2)}</p>
          <div className="first">
            <img className="temp-icon" src={getForecastIcon(icon2)} alt="" />
            <div className="forecastFirst">
              <h5 className="maxTemp">
                <span id="max">{toCelsius(tempMax2)} C</span>
                <span id="text">max</span>
              </h5>
              <h5 className="minTemp">
                <span id="min">{toCelsius(tempMin2)} C</span>
                <span id="minText">min</span>
              </h5>
            </div>
          </div>
          <p>{summary2}</p>
        </div>

        <div className="firstDay">
          <p>{convertUnix(time3)}</p>
          <div className="first">
            <img className="temp-icon" src={getForecastIcon(icon3)} alt="" />
            <div className="forecastFirst">
              <h5 className="maxTemp">
                <span id="max">{toCelsius(tempMax3)} C</span>
                <span id="text">max</span>
              </h5>
              <h5 className="minTemp">
                <span id="min">{toCelsius(tempMin3)} C</span>
                <span id="minText">min</span>
              </h5>
            </div>
          </div>
          <p>{summary3}</p>
        </div>

        <div className="firstDay">
          <p>{convertUnix(time4)}</p>
          <div className="first">
            <img className="temp-icon" src={getForecastIcon(icon4)} alt="" />
            <div className="forecastFirst">
              <h5 className="maxTemp">
                <span id="max">{toCelsius(tempMax4)} C</span>
                <span id="text">max</span>
              </h5>
              <h5 className="minTemp">
                <span id="min">{toCelsius(tempMin4)} C</span>
                <span id="minText">min</span>
              </h5>
            </div>
          </div>
          <p>{summary4}</p>
        </div>

        <div className="firstDay">
          <p>{convertUnix(time5)}</p>
          <div className="first">
            <img className="temp-icon" src={getForecastIcon(icon5)} alt="" />
            <div className="forecastFirst">
              <h5 className="maxTemp">
                <span id="max">{toCelsius(tempMax5)} C</span>
                <span id="text">max</span>
              </h5>
              <h5 className="minTemp">
                <span id="min">{toCelsius(tempMin5)} C</span>
                <span id="minText">min</span>
              </h5>
            </div>
          </div>
          <p>{summary5}</p>
        </div>
      </div>
    );
  }
}
