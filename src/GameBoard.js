import React from "react";

const Row = ({ row, width }) => {
  const cells = [];
  for (let i = 0; i <= width; i++) {
    cells.push(<div className="game-board__cell" key={i} col={i} />);
  }

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
  componentDidMount() {
    fetch("../data/sample-board.json")
      .then(res => res.json())
      .then(data => console.table(data), err => console.error(err));
  }

  render() {
    // const rows = new Array(this.props.height);

    const rows = [];
    for (let i = 0; i <= this.props.height; i++) {
      rows.push(<Row key={i} row={i} width={50} />);
    }
    return <section className="game-board">{rows}</section>;
  }
}

export default GameBoard;
