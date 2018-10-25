import React, { Component } from "react";
import SideBar from "./sidebar";

class Monitor extends Component {
  // state = { conveyors: [] };

  render() {
    return (
      <div>
        <SideBar conveyors={this.props.conveyors} />
      </div>
    );
  }
}

export default Monitor;
