import React, { Component } from "react";

const glassesStyle = {
  position: "absolute",
  width: "10rem",
  left: "50%",
  transform: "translateX(-50%)",
  top: "25%",
};
const glassesInfoStyle = {
  position: "absolute",
  width: "20rem",
  height: "38%",
  bottom: "0",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "rgba(248, 121, 11, 0.7)",
  overflow: "hidden",
};
export default class ModeWithGlasses extends Component {
  render() {
    let clone = { ...this.props.data };
    return (
      <div className="position-relative overflow-hidden">
        <img src={this.props.image} alt="model" style={{ width: "20rem" }} />
        <img src={clone.url} alt="glasses" style={glassesStyle} />
        <div style={glassesInfoStyle}>
          <h3>{clone.name}</h3>
          <h4 className="text-muted"> ${clone.price}</h4>
          <p className=" text-center mx-auto">{clone.desc}</p>
        </div>
      </div>
    );
  }
}
