import React, { Component } from "react";
import ImageViewer from "./imageViewer";

class MainView extends Component {
  state = { current_view: "dashboard_not" };

  getDashboardView = () => {
    //gobriel tu code va aca
    return (
      <div>
        <p>Hola Putas</p>
      </div>
    );
  };

  getConveyorView = () => {
    //Max tu code va aca
    return <ImageViewer />;
  };

  getConveyor;

  render() {
    if (this.state.current_view == "dashboard") {
      return this.getDashboardView();
    } else {
      return this.getConveyorView();
    }
  }
}

export default MainView;
