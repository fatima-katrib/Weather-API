import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };
  }

  handleInputChange = (value) => {
    this.setState({ city: value });
  };

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Search handleInput={this.handleInputChange} />
        </header>
        <main className="app__main" style={{ height: "100vh" }}>
          <SayHi
            width="300px"
            timeDisplay="none"
            THPDisplay="flex"
            lowerTemperature="10"
            higherTemperature="11"
            humidity="78"
            pressure="1008.48"
          />
          {/* <SayHello color="#010745" name={this.state.city} /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "75vw",
              marginTop: "50px",
            }}
          >
            <SayHi THPDisplay="none" width="6vw" meanTemperature="11" />
            <SayHi width="6vw" THPDisplay="none" meanTemperature="11" />
            <SayHi width="6vw" THPDisplay="none" meanTemperature="11" />
            <SayHi width="6vw" THPDisplay="none" meanTemperature="11" />
            <SayHi width="6vw" THPDisplay="none" meanTemperature="11" />
            <SayHi width="6vw" THPDisplay="none" meanTemperature="11" />
            <SayHi width="6vw" THPDisplay="none" meanTemperature="11" />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
