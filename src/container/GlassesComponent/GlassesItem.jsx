import React, { Component } from "react";
import { connect } from "react-redux";
import { displayGlasses } from "../actions/tryGlasses.action";
export class GlassesItem extends Component {
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
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleDisplayGlasses: (glassesId) => {
    dispatch(displayGlasses(glassesId));
  },
});
export default connect(null, mapDispatchToProps)(GlassesItem);
