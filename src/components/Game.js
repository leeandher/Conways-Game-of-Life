import React from "react";

import GameBoard from "./GameBoard";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;
const Game = props => {
  return (
    <Layout theme={props.config.theme} style={{ height: "100vh" }}>
      <Header style={{ background: "#FFF" }}>
        <h1 className="app-header">Conway's Game of Life</h1>
      </Header>
      <Content style={{ margin: "16px" }}>
        <h2 className="game-board__species">
          The Evolution of <br />
          <input placeholder="Magical Llamas" type="text" />
        </h2>
        <GameBoard
          height={props.config.height}
          width={props.config.width}
          boardData={props.board}
          spawnCell={props.spawnCell}
        />
        <h2 className="game-board__generation">
          Generation: <br />
          <span className="number">{props.game.generation}</span>
        </h2>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Made with ❤ by{" "}
        <a href="https://leander.xyz" target="_blank" rel="noopener noreferrer">
          Leander
        </a>
      </Footer>
    </Layout>
  );
};

export default Game;
