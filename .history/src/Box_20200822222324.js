import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
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
  };
  constructor(props) {
    super(props);
    this.state = {
      color: "yellow",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  change() {}

  handleClick() {
    this.change();
  }
  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Box;
