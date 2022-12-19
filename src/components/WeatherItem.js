import React, { Component } from "react";
import { render } from "react-dom";
import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg";

export default class WeatherItem extends Component {
  render() {
    return (
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4 style={{ display: this.props.timeDisplay }}>3:00</h4>
        <img
          src={mostlyCloudy}
          style={{ width: this.props.width, height: "auto" }}
        />
        <h4 style={{ display: this.props.timeDisplay }}>11&#176;C</h4>
        <h2 style={{ color: "white", display: this.props.THPDisplay }}>
          overcast clouds
        </h2>

        <div
          className="temp"
          style={{
            display: this.props.THPDisplay,
            alignItems: "center",
          }}
        >
          <h2>Temperature </h2>
          <span style={{ fontSize: "1.5em", padding: "20px" }}>
            10&#176; to 11&#176;C
          </span>
        </div>

        <div
          className="temp"
          style={{
            display: "flex",
            alignItems: "center",
            display: this.props.THPDisplay,
          }}
        >
          <h3>Humidity </h3>
          <span style={{ fontSize: "1em", padding: "20px" }}>78%</span>
          <h3>Pressure </h3>
          <span style={{ fontSize: "1em", padding: "20px" }}>1008.48</span>
        </div>
      </div>
    );
  }
}
export class SayHello extends Component {
  render() {
    return (
      <div style={{ color: this.props.color, backgroundColor: "yellow" }}>
        Hello {this.props.city}
      </div>
    );
  }
}
