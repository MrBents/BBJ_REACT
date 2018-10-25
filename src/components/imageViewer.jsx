import React, { Component } from "react";
import Image from "./image";

class ImageViewer extends Component {
  state = {
    src: ""
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({ src: this.props.default });
  }

  render() {
    return (
      <Image
        src={this.state.src}
        height={this.props.height}
        width={this.props.width}
      />
    );
  }
}

export default ImageViewer;
