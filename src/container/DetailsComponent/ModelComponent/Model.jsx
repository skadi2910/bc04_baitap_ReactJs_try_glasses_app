import React, { Component } from "react";
import image from "../../../assets/img/model.jpg";
export default class Model extends Component {
  render() {
    return (
      <div className="position-relative">
        <img src={image} alt="model" style={{ width: "20rem" }} />
      </div>
    );
  }
}
