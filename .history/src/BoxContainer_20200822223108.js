import React, { Component } from "react";

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
    return <div></div>;
  }
}

export default BoxContainer;
