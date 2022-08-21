import React, { Component } from "react";
import { connect } from "react-redux";
import {
  clearGlasses,
  nextGlasses,
  previousGlasses,
} from "../../actions/tryGlasses.action";

export class HandleGlassesDetails extends Component {
  render() {
    return (
      <div className="d-flex flex-column w-50 mx-auto gap-3">
        <button
          onClick={() => {
            this.props.handlePreviousGlasses(this.props.detailGlasses.id);
          }}
          className="btn btn-warning"
        >
          Prev
        </button>
        <button
          onClick={() => {
            this.props.handleNextGlasses(this.props.detailGlasses.id);
          }}
          className="btn btn-warning"
        >
          Next
        </button>
        <button
          onClick={() => {
            this.props.handleClearGlasses();
          }}
          className="btn btn-warning"
        >
          Clear
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  detailGlasses: state.glassesReducer.detailGlasses,
});

const mapDispatchToProps = (dispatch) => ({
  handlePreviousGlasses: (glassesId) => {
    dispatch(previousGlasses(glassesId));
  },
  handleNextGlasses: (glassesId) => {
    dispatch(nextGlasses(glassesId));
  },
  handleClearGlasses: () => {
    dispatch(clearGlasses());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HandleGlassesDetails);
