import React, { Component, Fragment } from "react";

import { Layout, Menu, Icon } from "antd";

const { Sider } = Layout;
const { SubMenu, Item, Divider } = Menu;

class Sidebar extends Component {
  state = {
    collapsed: true
  };

  render() {
    const gameButton = this.props.game.isPlaying ? (
      <Item onClick={this.props.pauseGame}>
        <Icon type="pause" />
        <span>Pause</span>
      </Item>
    ) : (
      <Item onClick={this.props.playGame}>
        <Icon type="caret-right" />
        <span>Play</span>
      </Item>
    );

    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={collapsed => this.setState({ collapsed })}
      >
        <Menu theme={this.props.config.theme}>
          {gameButton}
          <Item
            onClick={() => this.props.incrementBoard(this.props.config.height)}
          >
            <Icon type="step-forward" />
            <span>Increment</span>
          </Item>
          <Item onClick={() => this.props.clearBoard()}>
            <Icon type="close" />
            <span>Clear</span>
          </Item>
          <Item
            onClick={() =>
              this.props.randomizeBoard(
                this.props.config.height,
                this.props.config.width
              )
            }
          >
            <Icon type="redo" />
            <span>Randomize</span>
          </Item>
          <Divider />
          <SubMenu
            title={
              <Fragment>
                <Icon type="forward" />
                <span>Speed</span>
              </Fragment>
            }
          >
            <Item onClick={() => this.props.setSpeed("slow")}>Slow</Item>
            <Item onClick={() => this.props.setSpeed("moderate")}>Medium</Item>
            <Item onClick={() => this.props.setSpeed("fast")}>Fast</Item>
          </SubMenu>

          <SubMenu
            title={
              <Fragment>
                <Icon type="pic-center" />
                <span>Size</span>
              </Fragment>
            }
          >
            <Item onClick={() => this.props.setSize("small")}>
              Small (20 &times; 15)
            </Item>
            <Item onClick={() => this.props.setSize("medium")}>
              Medium (35 &times; 20)
            </Item>
            <Item onClick={() => this.props.setSize("large")}>
              Large (50 &times; 35)
            </Item>
          </SubMenu>

          <SubMenu
            title={
              <Fragment>
                <Icon type="star" />
                <span>Styling</span>
              </Fragment>
            }
          >
            <Item onClick={() => this.props.setTheme("light")}>Light</Item>
            <Item onClick={() => this.props.setTheme("dark")}>Dark</Item>
          </SubMenu>

          <SubMenu
            title={
              <Fragment>
                <Icon type="build" />
                <span>Presets</span>
              </Fragment>
            }
          >
            <Item onClick={() => this.props.loadPreset("Glider Gun")}>
              Glider Gun
            </Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
