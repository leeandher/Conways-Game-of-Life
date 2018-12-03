import React from "react";

const Row = ({ key, index, width }) => {
  const cells = [];
  for (let i = 0; i <= width; i++) {
    cells.push(<div className="game-board__cell" />);
  }

  return (
    <div className="game-board__row" key={key} index={index}>
      {cells}
    </div>
  );
};

class GameBoard extends React.Component {
  /* this.props
  height
  width
  colour
  
  */

  render() {
    // const rows = new Array(this.props.height);
    return (
      <section className="game-board">
        <Row key={1} index={1} width={50} />
        <Row key={1} index={1} width={50} />
      </section>
    );
  }
}

export default GameBoard;
