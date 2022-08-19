import React, { Component } from "react";

export default class Model extends Component {
  render() {
    let clone = { ...this.props.data };
    console.log("clone: ", clone);
    return (
      <div className="position-relative">
        <img src={this.props.image} alt="model" style={{ width: "20rem" }} />
      </div>
    );
  }
}
