import React, { Component } from "react";
import clearday from "./images/temperature icons/clear-day.svg";
import partlycloudyday from "./images/temperature icons/partly-cloudy-day.svg";
import clearnight from "./images/temperature icons/clear-night.svg";
import cloudy from "./images/temperature icons/cloudy.svg";
import partlycloudynight from "./images/temperature icons/partly-cloudy-night.svg";
import fog from "./images/temperature icons/fog.svg";
import rain from "./images/temperature icons/rain.svg";
import sleet from "./images/temperature icons/sleet.svg";
import snow from "./images/temperature icons/snow.svg";
import wind from "./images/temperature icons/snow.svg";

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    proxy: "http://cors-anywhere.herokuapp.com/",
    API_KEY: "fb4c116f915c61742654d62a921fffa2",
    forecastItem: [
      clearday,
      partlycloudyday,
      clearnight,
      partlycloudynight,
      cloudy,
      fog,
      sleet,
      snow,
      wind,
      rain
    ],
    forecast: "",
    firstDay: "",
    secondDay: "",
    thirdDay: "",
    fourthDay: "",
    fifthDay: "",
    dataKopaonik: {}
  };
  getValues(jsonData) {
    const { temperature, icon } = jsonData.currently;
    let forecast = { temperature, icon };
    let day1 = jsonData.daily.data[1];
    let time1 = day1.time;
    let icon1 = day1.icon;
    let tempMax1 = day1.temperatureMax;
    let tempMin1 = day1.temperatureMin;
    let firstDay = { time1, icon1, tempMax1, tempMin1 };

    let day2 = jsonData.daily.data[2];
    let time2 = day2.time;
    let icon2 = day2.icon;
    let tempMax2 = day2.temperatureMax;
    let tempMin2 = day2.temperatureMin;
    let secondDay = { time2, icon2, tempMax2, tempMin2 };

    let day3 = jsonData.daily.data[3];
    let time3 = day3.time;
    let icon3 = day3.icon;
    let tempMax3 = day3.temperatureMax;
    let tempMin3 = day3.temperatureMin;
    let thirdDay = { time3, icon3, tempMax3, tempMin3 };

    let day4 = jsonData.daily.data[4];
    let time4 = day4.time;
    let icon4 = day4.icon;
    let tempMax4 = day4.temperatureMax;
    let tempMin4 = day4.temperatureMin;
    let fourthDay = { time4, icon4, tempMax4, tempMin4 };

    let day5 = jsonData.daily.data[5];
    let time5 = day5.time;
    let icon5 = day5.icon;
    let tempMax5 = day5.temperatureMax;
    let tempMin5 = day5.temperatureMin;
    let fifthDay = { time5, icon5, tempMax5, tempMin5 };

    this.setState({
      forecast: forecast,
      firstDay: firstDay,
      secondDay: secondDay,
      thirdDay: thirdDay,
      fourthDay: fourthDay,
      fifthDay: fifthDay
    });
  }
  async getTemperatureKopaonik() {
    const api = `${this.state.proxy}https://api.darksky.net/forecast/${this.state.API_KEY}/43.268045, 20.826309`;
    const data = await fetch(api);
    const jsonData = await data.json();
    console.log(jsonData);
    this.getValues(jsonData);

    let dataKopaonik = Object.assign(
      this.state.forecast,
      this.state.firstDay,
      this.state.secondDay,
      this.state.thirdDay,
      this.state.fourthDay,
      this.state.fifthDay
    );
    console.log(dataKopaonik);

    this.setState({
      dataKopaonik: dataKopaonik
    });
  }
  componentDidMount() {
    this.getTemperatureKopaonik();
  }

  convertUnix = unixTime => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let date = new Date(unixTime * 1000);
    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let day = date.getDate();
    let dayOfWeek = days[date.getDay()];

    let currentDate = dayOfWeek + " " + day + ". " + month + " " + year + ".";
    return currentDate;
  };
  toCelsius(degree) {
    let toCelsius = (((degree - 32) * 5) / 9).toFixed(0);
    return toCelsius;
  }
  getForecastIcon = icon => {
    switch (icon) {
      case "clear-day":
        return this.state.forecastItem[0];
        break;
      case "clear-night":
        return this.state.forecastItem[2];
        break;
      case "partly-cloudy-day":
        return this.state.forecastItem[1];
        break;
      case "partly-cloudy-night":
        return this.state.forecastItem[3];
        break;
      case "cloudy":
        return this.state.forecastItem[4];
        break;
      case "rain":
        return this.state.forecastItem[9];
        break;
      case "sleet":
        return this.state.forecastItem[6];
        break;
      case "snow":
        return this.state.forecastItem[7];
        break;
      case "wind":
        return this.state.forecastItem[8];
        break;
      case "fog":
        return this.state.forecastItem[5];
        break;
    }
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          convertUnix: this.convertUnix,
          toCelsius: this.toCelsius,
          getForecastIcon: this.getForecastIcon
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
