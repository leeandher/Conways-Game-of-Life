import React from "react";

import { Layout, Menu, Icon } from "antd";

import GameBoard from "./GameBoard";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

class Page extends React.Component {
  state = {
    size: {
      type: "medium",
      height: 30,
      width: 50
    },
    speed: 100,
    generation: 0,
    collapsed: true,
    isPlaying: false,
    boardData: []
  };

  randomizeBoard = (
    height = this.state.size.height,
    width = this.state.size.width
  ) => {
    // Generate the random board
    const newBoard = [];
    for (let i = 0; i < height; i++) {
      const rowData = [];
      for (let j = 0; j < width; j++) {
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
          i !== this.state.size.height - 1
            ? currentBoard[i + 1][j - 1] || 0
            : 0, // Bottom left
          i !== this.state.size.height - 1 ? currentBoard[i + 1][j] || 0 : 0, // Below
          i !== this.state.size.height - 1 ? currentBoard[i + 1][j + 1] || 0 : 0 // Bottom right
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

  resize = e => {
    const type = e.target.value;
    const newSize = {};
    switch (type) {
      case "large":
        newSize.height = 50;
        newSize.width = 60;
        break;
      case "medium":
      default:
        newSize.height = 30;
        newSize.width = 40;
        break;
      case "small":
        newSize.height = 20;
        newSize.width = 30;
    }
    newSize.type = type;
    this.randomizeBoard(newSize.height, newSize.width);
    this.setState({ size: newSize });
  };

  componentDidMount() {
    this.randomizeBoard();
    // setInterval(() => this.stepBoard(), this.state.speed);
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
            <Menu theme="dark">
              <Menu.Item>
                <Icon type={this.state.isPlaying ? "pause" : "caret-right"} />
                <span>{this.state.isPlaying ? "Pause" : "Play"}</span>
              </Menu.Item>
              <Menu.Item>
                <Icon type="step-forward" />
                <span>Increment</span>
              </Menu.Item>
              <Menu.Item>
                <Icon type="close" />
                <span>Clear</span>
              </Menu.Item>
              <Menu.Item>
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
                <Menu.Item>Slow</Menu.Item>
                <Menu.Item>Medium</Menu.Item>
                <Menu.Item>Fast</Menu.Item>
              </SubMenu>

              <SubMenu
                title={
                  <React.Fragment>
                    <Icon type="pic-center" />
                    <span>Size</span>
                  </React.Fragment>
                }
              >
                <Menu.Item>Slow</Menu.Item>
                <Menu.Item>Medium</Menu.Item>
                <Menu.Item>Fast</Menu.Item>
              </SubMenu>

              <SubMenu
                title={
                  <React.Fragment>
                    <Icon type="star" />
                    <span>Styling</span>
                  </React.Fragment>
                }
              >
                <Menu.Item>Slow</Menu.Item>
                <Menu.Item>Medium</Menu.Item>
                <Menu.Item>Fast</Menu.Item>
              </SubMenu>

              <SubMenu
                title={
                  <React.Fragment>
                    <Icon type="build" />
                    <span>Presets</span>
                  </React.Fragment>
                }
              >
                <Menu.Item>Slow</Menu.Item>
                <Menu.Item>Medium</Menu.Item>
                <Menu.Item>Fast</Menu.Item>
              </SubMenu>

              <Menu.Item />
              <Menu.Item />
              <Menu.Item />
            </Menu>
          </Sider>
          <Layout>
            <Content>
              <h1>Generation: {this.state.generation}</h1>
              <GameBoard
                height={this.state.size.height}
                width={this.state.size.width}
                boardData={this.state.boardData}
                spawnCell={this.spawnCell}
              />
            </Content>
          </Layout>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Page;
