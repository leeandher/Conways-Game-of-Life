import React, { Component, Fragment } from "react";

import { Layout, Menu, Icon } from "antd";

const { Sider } = Layout;
const { SubMenu, Item, Divider } = Menu;

class Sidebar extends Component {
  state = {
    collapsed: false,
    selectedKeys: ["s1-2", "s2-2", "s3-1"]
  };

  highlightKeys = () => {
    const newSelectedKeys = [];
    // Assign the proper speed key
    switch (this.props.config.speed) {
      case 400:
        newSelectedKeys.push("s1-1");
        break;
      case 200:
      default:
        newSelectedKeys.push("s1-2");
        break;
      case 100:
        newSelectedKeys.push("s1-3");
        break;
    }

    // Assign the proper size key
    switch (this.props.config.height) {
      case 15:
        newSelectedKeys.push("s2-1");
        break;
      case 20:
      default:
        newSelectedKeys.push("s2-2");
        break;
      case 35:
        newSelectedKeys.push("s2-3");
        break;
    }

    // Assign the proper theme key
    switch (this.props.config.theme) {
      case "light":
      default:
        newSelectedKeys.push("s3-1");
        break;
      case "dark":
        newSelectedKeys.push("s3-2");
        break;
    }
    console.log(newSelectedKeys);

    this.setState({ selectedKeys: newSelectedKeys });
  };

  componentDidUpdate(prevProps) {
    const { speed, height, theme } = this.props.config;
    // Only run highlightKeys if new config props have been received
    if (
      prevProps.config.speed === speed &&
      prevProps.config.height === height &&
      prevProps.config.theme === theme
    )
      return;
    this.highlightKeys();
  }

  render() {
    const gameButton = this.props.game.isPlaying ? (
      <Item key={1} onClick={this.props.pauseGame}>
        <Icon type="pause" />
        <span>Pause</span>
      </Item>
    ) : (
      <Item key={1} onClick={this.props.playGame}>
        <Icon type="caret-right" />
        <span>Play</span>
      </Item>
    );

    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={collapsed => this.setState({ collapsed })}
        theme={this.props.config.theme}
      >
        <div className="logo-wrapper">
          <a href="/" title="Conway's Game of Life">
            <img src="logo.jpg" alt="Conway Logo" className="logo" />
          </a>
        </div>
        <Menu
          selectedKeys={this.state.selectedKeys}
          mode="inline"
          multiple={true}
          theme={this.props.config.theme}
        >
          {gameButton}
          <Item
            key={2}
            onClick={() => this.props.incrementBoard(this.props.config.height)}
          >
            <Icon type="step-forward" />
            <span>Increment</span>
          </Item>
          <Item key={3} onClick={() => this.props.clearBoard()}>
            <Icon type="close" />
            <span>Clear</span>
          </Item>
          <Item
            key={4}
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
            key={"s1"}
            title={
              <Fragment>
                <Icon type="forward" />
                <span>Speed</span>
              </Fragment>
            }
          >
            <Item key={"s1-1"} onClick={() => this.props.setSpeed("slow")}>
              Slow
            </Item>
            <Item key={"s1-2"} onClick={() => this.props.setSpeed("moderate")}>
              Medium
            </Item>
            <Item key={"s1-3"} onClick={() => this.props.setSpeed("fast")}>
              Fast
            </Item>
          </SubMenu>
          <SubMenu
            key={"s2"}
            title={
              <Fragment>
                <Icon type="pic-center" />
                <span>Size</span>
              </Fragment>
            }
          >
            <Item key={"s2-1"} onClick={() => this.props.setSize("small")}>
              Small (20 &times; 15)
            </Item>
            <Item key={"s2-2"} onClick={() => this.props.setSize("medium")}>
              Medium (35 &times; 20)
            </Item>
            <Item key={"s2-3"} onClick={() => this.props.setSize("large")}>
              Large (50 &times; 35)
            </Item>
          </SubMenu>

          {/*  Removed themeing implementation
          
          <SubMenu
            key={"s3"}
            title={
              <Fragment>
                <Icon type="star" />
                <span>Styling</span>
              </Fragment>
            }
          >
            <Item key={"s3-1"} onClick={() => this.props.setTheme("light")}>
              Light
            </Item>
            <Item key={"s3-2"} onClick={() => this.props.setTheme("dark")}>
              Dark
            </Item>
          </SubMenu> */}

          <SubMenu
            key={"s4"}
            title={
              <Fragment>
                <Icon type="build" />
                <span>Presets</span>
              </Fragment>
            }
          >
            <Item
              key={"s4-1"}
              onClick={() => this.props.loadPreset("Glider Gun")}
            >
              Glider Gun
            </Item>
            <Item key={"s4-2"} onClick={() => this.props.loadPreset("Pulsars")}>
              Pulsars
            </Item>
            <Item
              key={"s4-3"}
              onClick={() => this.props.loadPreset("Pentadecathlons")}
            >
              Pentadecathlons
            </Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
