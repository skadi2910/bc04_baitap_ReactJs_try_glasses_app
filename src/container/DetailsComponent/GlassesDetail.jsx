import React, { Component } from "react";
import HandleGlassesDetails from "./HandleGlassesComponent/HandleGlassesDetail";
import Model from "./ModelComponent/Model";
import ModelWithGlasses from "./ModelComponent/ModelWithGlasses";

export default class GlassesDetail extends Component {
  render() {
    return (
      <div className="row my-3">
        <div className="col-5">
          <Model />
        </div>
        <div className="col-2">
          <HandleGlassesDetails
          // data={this.props.data}
          // handleChangeGlasses={this.props.handleChangeGlasses}
          />
        </div>
        <div className="col-5">
          <ModelWithGlasses />
        </div>
      </div>
    );
  }
}
