import React, { Component } from "react";
import "./Box.css";
import { choice } from "./helpers";

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
      color: choice(this.props.colors),
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
