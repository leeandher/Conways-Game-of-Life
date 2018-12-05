import React, { Component } from "react";
import { Radio } from "antd";

class ControlPanel extends Component {
  render() {
    return (
      <section className="control-panel">
        <h2>Controls</h2>
        <Radio.Group value={this.props.size} onChange={this.props.resize}>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="medium">Medium</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </section>
    );
  }
}

export default ControlPanel;
