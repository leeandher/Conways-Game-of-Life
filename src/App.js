import React from "react";

import Header from "./Header";
import GameBoard from "./GameBoard";
import ControlPanel from "./ControlPanel";

class App extends React.Component {
  state = {
    height: 30, //50,
    width: 50, //60,
    speed: 100,
    boardData: [],
    generation: 0
  };

  randomizeBoard = () => {
    // Generate the random board
    const newBoard = [];
    for (let i = 0; i < this.state.height; i++) {
      const rowData = [];
      for (let j = 0; j < this.state.width; j++) {
        rowData.push(Math.round(Math.random()));
      }
      newBoard.push(rowData);
    }
    this.setState({ boardData: newBoard });
  };

  stepBoard = () => {
    // Create a copy of the existing board
    const currentBoard = this.state.boardData;
    const newBoard = currentBoard.map(row => [...row]);

    currentBoard.forEach((row, i) => {
      row.forEach((cell, j) => {
        // Get the values of the surrounding 8 cells
        const neighbours = [
          i !== 0 ? currentBoard[i - 1][j - 1] || 0 : 0, // Top left
          i !== 0 ? currentBoard[i - 1][j] || 0 : 0, // Above
          i !== 0 ? currentBoard[i - 1][j + 1] || 0 : 0, // Top right
          row[j - 1] || 0, // Left
          row[j + 1] || 0, // Right
          i !== this.state.height - 1 ? currentBoard[i + 1][j - 1] || 0 : 0, // Bottom left
          i !== this.state.height - 1 ? currentBoard[i + 1][j] || 0 : 0, // Below
          i !== this.state.height - 1 ? currentBoard[i + 1][j + 1] || 0 : 0 // Bottom right
        ];

        // Ignore the 'old'/'new' alive values and sum them as ones
        const neighbourValue = neighbours.reduce(
          (total, val) => total + Boolean(val),
          0
        );

        // Now take a look at the existing cell
        switch (cell) {
          // If alive...
          case 2:
          case 1:
            newBoard[i][j] = neighbourValue <= 1 || neighbourValue >= 4 ? 0 : 2;
            break;

          //If dead...
          case 0:
          default:
            newBoard[i][j] = neighbourValue === 3 ? 1 : 0;
            break;
        }
      });
    });

    this.setState({
      boardData: newBoard,
      generation: this.state.generation + 1
    });
  };

  spawnCell = (row, col) => {
    const newBoard = this.state.boardData.map(row => [...row]);
    newBoard[row][col] = newBoard[row][col] > 0 ? 0 : 1;
    this.setState({ boardData: newBoard });
  };

  componentDidMount() {
    this.randomizeBoard();
    setInterval(() => this.stepBoard(), this.state.speed);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h1>Generation: {this.state.generation}</h1>
        <GameBoard
          height={this.state.height}
          width={this.state.width}
          boardData={this.state.boardData}
          spawnCell={this.spawnCell}
        />
        {/* <ControlPanel /> */}
      </div>
    );
  }
}

export default App;
