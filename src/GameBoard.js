import React from "react";

const Row = ({ row, rowData }) => {
  // Create all the cells
  const cells = rowData.map((val, i) => {
    let statusClass;
    // Assign the appropriate class
    switch (val) {
      case 2:
        statusClass = "game-board__cell--alive-old";
        break;
      case 1:
        statusClass = "game-board__cell--alive-new";
        break;
      case 0:
      default:
        statusClass = "game-board__cell--dead";
        break;
    }
    return (
      <div className={`game-board__cell ${statusClass}`} key={i} col={i} />
    );
  });
  return (
    <div className="game-board__row" row={row}>
      {cells}
    </div>
  );
};

class GameBoard extends React.Component {
  /* this.props
  height
  width
  data
  */

  // Initial state
  state = {
    data: []
  };

  // Lifecycle methods
  componentDidMount() {
    const { data } = require("./data/sample-board.json");
    this.setState({ data });
  }

  render() {
    if (!this.state.data.length) return null;

    // Create all the rows
    const rows = [];
    for (let i = 0; i < this.props.height; i++) {
      rows.push(<Row key={i} row={i} rowData={this.state.data[i]} />);
    }
    return <section className="game-board">{rows}</section>;
  }
}

export default GameBoard;
