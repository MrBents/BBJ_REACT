import React, { Component } from "react";
import SideBar from "./sidebar";
import axios from "axios";
import config from "../config";
import path from "path";

class Monitor extends Component {
  state = { conveyors: [] };

  constructor(props) {
    super(props);
    console.log(path.join(config.express_url, "conveyors"));
  }

  componentDidMount() {
    axios.get(config.express_url + "conveyors").then(res => {
      console.log(res.data);
      this.setState({ conveyors: res.data });
    });
  }

  render() {
    return (
      <div>
        <SideBar conveyors={this.state.conveyors} />
      </div>
    );
  }
}

export default Monitor;
