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
          <SayHi width="300px" timeDisplay="none" THPDisplay="flex" />
          {/* <SayHello color="#010745" name={this.state.city} /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "80vw",
            }}
          >
            <SayHi THPDisplay="none" width="6vw" />
            <SayHi width="6vw" THPDisplay="none" />
            <SayHi width="6vw" THPDisplay="none" />
            <SayHi width="6vw" THPDisplay="none" />
            <SayHi width="6vw" THPDisplay="none" />
            <SayHi width="6vw" THPDisplay="none" />
            <SayHi width="6vw" THPDisplay="none" />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
