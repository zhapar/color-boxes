import React, { Component } from "react";
import Box from "./Box";
import "./BoxContainer.css";

class BoxContainer extends Component {
  static defaultProps = {
    colors: [
      "gold",
      "yellow",
      "orangered",
      "red",
      "lawngreen",
      "mediumseagreen",
      "olive",
    ],
    numBox: 16,
  };
  render() {
    const boxes = Array.from({ length: this.props.numBox }).map(() => (
      <Box colors={this.props.colors} />
    ));
    return boxes;
  }
}

export default BoxContainer;
