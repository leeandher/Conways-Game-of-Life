import React, { Component } from "react";

import Header from "./Header";
import GameBoard from "./GameBoard";
import ControlPanel from "./ControlPanel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <GameBoard />
        <ControlPanel />
      </div>
    );
  }
}

export default App;
