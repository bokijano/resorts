import React, { Component } from "react";
import LongTerm from "./longTermForecast.js";
import "./temp.css";
import ButtonContainer from "./../Button.js";

export default class kopaonikTemp extends Component {
  state = {
    openModal: false
  };
  displayModal = () => {
    this.setState({
      openModal: !this.state.openModal
    });
  };
  render() {
    const { temperature, icon, apparentTemperature } = this.props.temp;
    const { toCelsius, getForecastIcon, convertUnix } = this.props.value;
    const { openModal } = this.state;
    return (
      <React.Fragment>
        <div className="mountain-pos">
          <h1>{this.props.mountain}</h1>
          <div className="temperature-content">
            <img
              className="temp-icon"
              src={getForecastIcon(icon)}
              alt="kopaonik icon"
            />
            <h3 className="temperature-degree">{toCelsius(temperature)}</h3>
            <span className="degree-temp">C</span>
            <div className="apparent">
              <p>Subjective</p>
              <div className="subj">
                <h3 className="apparent-temp">
                  {toCelsius(apparentTemperature)}
                </h3>
                <span className="degree-temp">C</span>
              </div>
            </div>
            <ButtonContainer onClick={this.displayModal}>
              next 5 days
            </ButtonContainer>
          </div>
        </div>

        <div className={this.state.openModal ? "long show-long" : "long"}>
          <LongTerm
            temp={this.props.temp}
            value={this.props.value}
            mountain={this.props.mountain}
            displayModal={this.displayModal}
          />
        </div>
      </React.Fragment>
    );
  }
}
