import React, { Component } from "react";
import GlassesItem from "./GlassesItem";
import { connect } from "react-redux";
export class GlassesList extends Component {
  render() {
    return (
      <div
        className="container mx-auto border bg-white"
        style={{ maxWidth: "1090px" }}
      >
        <div className="row ">
          {this.props.data.map((item) => {
            return <GlassesItem data={item} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.glassesReducer.dataGlasses,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(GlassesList);
