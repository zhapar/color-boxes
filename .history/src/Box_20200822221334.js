import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "yellow",
    };
  }
  render() {
    return <div className="Box"></div>;
  }
}

export default Box;
