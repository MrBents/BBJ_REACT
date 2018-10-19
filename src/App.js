import React, { Component } from "react";
import "./App.css";
import NavBarC from "./components/navbar";
import Monitor from "./components/monitor";
import { Col, Row } from "reactstrap";
// import SampleGraph from "./components/sampleGraph";
import MainView from "./components/mainView";

class App extends Component {
  state = { users: [] };

  // componentDidMount() {
  //   fetch("/users")
  //     .then(res => res.json())
  //     .then(users => this.setState({ users }));
  // }

  andres = <p>Puta</p>;

  render() {
    return (
      <div className="App">
        <NavBarC />
        <Row>
          <Col xs="2" style={{ padding: 0 }}>
            <Monitor />
          </Col>
          <Col style={{ padding: 0 }}>
            {/* <SampleGraph /> */}
            <MainView />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
