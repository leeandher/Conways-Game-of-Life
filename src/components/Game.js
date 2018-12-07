import React, { Fragment } from "react";

import GameBoard from "./GameBoard";

const Game = props => (
  <Fragment>
    <h1>Generation: {props.game.generation}</h1>
    <GameBoard
      height={props.config.height}
      width={props.config.width}
      boardData={props.board}
      spawnCell={props.spawnCell}
    />
  </Fragment>
);

export default Game;
