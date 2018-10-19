import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class SideBar extends Component {
  state = {};

  listGroupItemStyles = {
    maxHeight: "50px"
  };

  render() {
    return (
      <ListGroup>
        {this.props.conveyors.map(c => (
          <ListGroupItem
            key={c.id}
            style={this.listGroupItemStyles}
            color="secondary"
          >
            <span style={{ fontSize: 20, textAlign: "left" }}>
              Conveyor {c.id}
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default SideBar;
