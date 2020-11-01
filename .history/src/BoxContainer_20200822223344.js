import React, { Component } from "react";
import Box from './Box';

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
    const boxes = Array.from({length: this.props.numBox}).map(() => (
      <Box colors={this.props.colors} />
    ))
    return (
    );
  }
}

export default BoxContainer;
