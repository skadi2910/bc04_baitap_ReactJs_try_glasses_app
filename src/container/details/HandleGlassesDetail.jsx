import React, { Component } from "react";

export default class HandleGlassesDetails extends Component {
  render() {
    return (
      <div className="d-flex flex-column w-50 mx-auto gap-3">
        <button
          onClick={() => {
            this.props.handleChangeGlasses(-1, this.props.data.id);
          }}
          className="btn btn-warning"
        >
          Prev
        </button>
        <button
          onClick={() => {
            this.props.handleChangeGlasses(1, this.props.data.id);
          }}
          className="btn btn-warning"
        >
          Next
        </button>
        <button className="btn btn-warning">Clear</button>
      </div>
    );
  }
}
