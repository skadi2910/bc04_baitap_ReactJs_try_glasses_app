import React, { Component } from "react";
import GlassesItem from "./GlassesItem";

export default class GlassesList extends Component {
  render() {
    return (
      <div
        className="container mx-auto border bg-white"
        style={{ maxWidth: "1090px" }}
      >
        <div className="row ">
          {this.props.data.map((item) => {
            return (
              <GlassesItem
                data={item}
                handleDisplayGlasses={this.props.handleDisplayGlasses}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
