import React, { Component } from "react";
import ImageViewer from "./imageViewer";
import socketIOClient from "socket.io-client";
import { Col, Row, Table } from "reactstrap";
import config from "../config";

class MainView extends Component {
  state = {
    current_view: "dashboard_not",
    top_img_src: "",
    head_img_source: "",
    endpoint: config.express_url,
    feed: [
      { id: 272, class: "good", type: "speed45" },
      { id: 273, class: "good", type: "speed45" },
      { id: 274, class: "bad", type: "speed45" },
      { id: 275, class: "good", type: "speed45" }
    ]
  };

  getDashboardView = () => {
    //gobriel tu code va aca
    return (
      <div>
        <p>Hola Putas</p>
      </div>
    );
  };

  columnStyle = { marginLeft: "auto", marginRight: "auto" };
  table_syle = { minWidth: "100%" };

  getConveyorView = () => {
    //Max tu code va aca
    const socket = socketIOClient(this.state.endpoint);
    return (
      <Row>
        <Col>
          <div style={this.columnStyle}>
            <ImageViewer
              conveyor={this.props.active_conveyor}
              default={"https://via.placeholder.com/150x600"}
              height={600}
              width={150}
            />
          </div>
        </Col>

        <Col>
          <Row>
            <div style={this.columnStyle}>
              <ImageViewer
                conveyor={this.props.active_conveyor}
                default={"https://via.placeholder.com/350x350"}
                height={350}
                width={350}
              />
            </div>
          </Row>
          <Row>
            <div style={this.columnStyle}>
              {/* Analytics/feed */}
              <Table style={this.table_syle} bordered>
                <thead>
                  <tr>
                    <th>#</th>
                    {Object.keys(this.state.feed[0]).map(k => {
                      return <th>{k}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {this.state.feed.map((feed_entry, index) => {
                    return (
                      <tr>
                        <th scope="row">{index}</th>
                        {Object.keys(this.state.feed[0]).map(k => {
                          return <td>{feed_entry[k]}</td>;
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Row>
        </Col>
      </Row>
    );
  };

  getConveyor;

  render() {
    // Sockets logic
    const socket = socketIOClient(this.state.endpoint);
    socket.on("image_head", img_src => {
      this.setState({ head_img_src: img_src });
    });
    socket.on("image_top", img_src => {
      this.setState({ top_img_src: img_src });
    });

    if (this.state.current_view == "dashboard") {
      return this.getDashboardView();
    } else {
      return this.getConveyorView();
    }
  }
}

export default MainView;
