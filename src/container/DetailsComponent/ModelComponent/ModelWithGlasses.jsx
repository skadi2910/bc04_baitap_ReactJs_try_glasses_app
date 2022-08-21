import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import image from "../../../assets/img/model.jpg";
const glassesImageStyle = {
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
export class ModelWithGlasses extends Component {
  render() {
    let { url, name, price, desc } = this.props.detailGlasses;
    return (
      <div className="position-relative overflow-hidden">
        <img src={image} alt="model" style={{ width: "20rem" }} />
        {this.props.detailGlasses !== "" && (
          <div>
            <img src={url} alt="glasses" style={glassesImageStyle} />
            <div style={glassesInfoStyle}>
              <h3>{name}</h3>
              <h4 className="text-muted"> ${price}</h4>
              <p className=" text-center mx-auto">{desc}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  detailGlasses: state.glassesReducer.detailGlasses,
});

export default connect(mapStateToProps)(ModelWithGlasses);
