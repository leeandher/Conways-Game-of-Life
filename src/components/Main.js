import React from "react";

import { Layout, Menu, Icon } from "antd";

import GameBoard from "./GameBoard";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

class Main extends React.Component {
  state = {
    collapsed: true
  };

  componentDidMount() {
    setInterval(
      () => this.props.incrementBoard(this.props.config.height),
      this.props.config.speed
    );
  }

  render() {
    return (
      <React.Fragment>
        <Layout>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={collapsed => this.setState({ collapsed })}
          >
            <Menu theme={this.props.config.theme}>
              <Menu.Item>
                <Icon type={this.state.isPlaying ? "pause" : "caret-right"} />
                <span>{this.state.isPlaying ? "Pause" : "Play"}</span>
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  this.props.incrementBoard(this.props.config.height)
                }
              >
                <Icon type="step-forward" />
                <span>Increment</span>
              </Menu.Item>
              <Menu.Item onClick={() => this.props.clearBoard()}>
                <Icon type="close" />
                <span>Clear</span>
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  this.props.randomizeBoard(
                    this.props.config.height,
                    this.props.config.width
                  )
                }
              >
                <Icon type="redo" />
                <span>Randomize</span>
              </Menu.Item>
              <Menu.Divider />
              <SubMenu
                title={
                  <React.Fragment>
                    <Icon type="forward" />
                    <span>Speed</span>
                  </React.Fragment>
                }
              >
                <Menu.Item onClick={() => this.props.setSpeed("slow")}>
                  Slow
                </Menu.Item>
                <Menu.Item onClick={() => this.props.setSpeed("moderate")}>
                  Medium
                </Menu.Item>
                <Menu.Item onClick={() => this.props.setSpeed("fast")}>
                  Fast
                </Menu.Item>
              </SubMenu>

              <SubMenu
                title={
                  <React.Fragment>
                    <Icon type="pic-center" />
                    <span>Size</span>
                  </React.Fragment>
                }
              >
                <Menu.Item onClick={() => this.props.setSize("small")}>
                  Small (20 &times; 15)
                </Menu.Item>
                <Menu.Item onClick={() => this.props.setSize("medium")}>
                  Medium (35 &times; 20)
                </Menu.Item>
                <Menu.Item onClick={() => this.props.setSize("large")}>
                  Large (50 &times; 35)
                </Menu.Item>
              </SubMenu>

              <SubMenu
                title={
                  <React.Fragment>
                    <Icon type="star" />
                    <span>Styling</span>
                  </React.Fragment>
                }
              >
                <Menu.Item onClick={() => this.props.setTheme("light")}>
                  Light
                </Menu.Item>
                <Menu.Item onClick={() => this.props.setTheme("dark")}>
                  Dark
                </Menu.Item>
              </SubMenu>

              <SubMenu
                title={
                  <React.Fragment>
                    <Icon type="build" />
                    <span>Presets</span>
                  </React.Fragment>
                }
              >
                <Menu.Item onClick={() => this.props.loadPreset("Glider Gun")}>
                  Glider Gun
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content>
              <button onClick={this.props.playGame}>play</button>
              <button onClick={this.props.pauseGame}>pause</button>
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
      </React.Fragment>
    );
  }
}

export default Main;
