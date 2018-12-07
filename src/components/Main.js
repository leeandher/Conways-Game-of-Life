import React from "react";

import { Layout, Menu, Icon } from "antd";

import GameBoard from "./GameBoard";
import Sidebar from "./Sidebar";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

class Main extends React.Component {
  state = {
    gameTimer: null
  };

  componentDidMount() {
    // If set to play on load, start right away
    if (this.props.game.isPlaying) {
      const gameTimer = setInterval(
        () => this.props.incrementBoard(this.props.config.height),
        this.props.config.speed
      );
      this.setState({ gameTimer });
    }
  }

  componentDidUpdate(prevProps) {
    // Only update change the state if the new props affect the game being played
    if (prevProps.game.isPlaying === this.props.game.isPlaying) return;

    // Play the game
    if (this.props.game.isPlaying) {
      const gameTimer = setInterval(
        () => this.props.incrementBoard(this.props.config.height),
        this.props.config.speed
      );
      this.setState({ gameTimer });
    }
    // Pause the game
    else {
      clearInterval(this.state.gameTimer);
    }
  }

  componentWillUnmount() {
    // Stop the game if unmounting
    if (this.props.game.isPlaying) {
      clearInterval(this.state.gameTimer);
    }
  }

  render() {
    return (
      <Layout>
        <Sidebar {...this.props} />
        <Layout>
          <Content>
            <h1>Generation: {this.props.game.generation}</h1>
            <GameBoard
              height={this.props.config.height}
              width={this.props.config.width}
              boardData={this.props.board}
              spawnCell={this.props.spawnCell}
            />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Main;
