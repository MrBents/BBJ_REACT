import React, { Component } from "react";
import "./App.css";
import NavBarC from "./components/navbar";
import Monitor from "./components/monitor";
import { Col, Row } from "reactstrap";
// import SampleGraph from "./components/sampleGraph";
import MainView from "./components/mainView";
import Sidebar from "react-sidebar";

class App extends Component {
  state = {
    users: [],
    sidebarOpen: true
  };

  constructor(props) {
    super(props);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  andres = <p>Puta</p>;

  render() {
    return (
      <div className="App">
        <Row>
          <Col>
            <NavBarC expand={this.onSetSidebarOpen} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Sidebar
              sidebar={<Monitor />}
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              styles={{ sidebar: { background: "white" } }}
            />
          </Col>
        </Row>

        {/* <SampleGraph /> */}
        {/* <MainView /> */}
      </div>
    );
  }
}

export default App;
