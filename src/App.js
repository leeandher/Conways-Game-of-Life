import React, { Component } from "react";

import Header from "./Header";
import GameBoard from "./GameBoard";
import ControlPanel from "./ControlPanel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <GameBoard height={40} width={60} />
        <ControlPanel />
      </div>
    );
  }
}

export default App;
