import React, { Component } from "react";
import HandleGlassesDetails from "./HandleGlassesDetail";
import model from "../../assets/img/model.jpg";
import Model from "./ModelComponent/Model";
import ModeWithGlasses from "./ModelComponent/ModelWithGlasses";

export default class GlassesDetail extends Component {
  render() {
    return (
      <div className="row my-3">
        <div className="col-5">
          <Model image={model} />
        </div>
        <div className="col-2">
          <HandleGlassesDetails
            data={this.props.data}
            handleChangeGlasses={this.props.handleChangeGlasses}
          />
        </div>
        <div className="col-5">
          <ModeWithGlasses image={model} data={this.props.data} />
        </div>
      </div>
    );
  }
}
