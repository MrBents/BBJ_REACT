import React, { Component } from "react";
import "./App.css";
import NavBarC from "./components/navbar";
import Monitor from "./components/monitor";
import { Col, Row } from "reactstrap";
// import SampleGraph from "./components/sampleGraph";
import MainView from "./components/mainView";
import socketIOClient from "socket.io-client";
import axios from "axios";
import config from "./config";

class App extends Component {
  state = {
    users: [],
    conveyors: [],
    active_conveyor: "1",
    endpoint: config.express_url
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    axios.get(config.express_url + "conveyors").then(res => {
      console.log(res.data);
      this.setState({ conveyors: res.data });
    });
  }

  render() {
    const socket = socketIOClient(this.state.endpoint);
    return (
      <div className="App">
        <NavBarC />
        <Row>
          <Col xs="2" style={{ padding: 0 }}>
            <Monitor conveyors={this.state.conveyors} />
          </Col>
          <Col style={{ padding: 0 }}>
            {/* <SampleGraph /> */}
            <MainView
              conveyors={this.state.conveyors}
              active_conveyor={this.state.active_conveyor}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
