import React, { Component } from "react";

export default class GlassesItem extends Component {
  render() {
    return (
      <div className="col-3 h-100 img-fluid my-3">
        <img
          src={this.props.data.url}
          alt="aaa"
          style={{ width: "10rem", cursor: "pointer" }}
          onClick={() => {
            this.props.handleDisplayGlasses(this.props.data.id);
          }}
        />
      </div>
    );
  }
}
