import React, { Component } from "react";
import data from "./dataGlasses.json";
import background from "../assets/img/background.jpg";
import GlassesList from "./glasses/GlassesList";
import GlassesDetail from "./details/GlassesDetail";

const backgroundStyle = {
  backgroundImage: "linear-gradient(to left, #8942a8, #ba382f)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "100%",
};
const titleStyle = {
  color: "white",
  background: "rgba(0, 0, 0, 0.6)",
  width: "84%",
  margin: "0px auto 10px",
  padding: "5px 0",
};
export default class TryGlasses extends Component {
  state = {
    dataGlasses: data,
    detailGlasses: data[0],
  };
  handleDisplayGlasses = (id) => {
    let dataGlasses = this.state.dataGlasses.filter((item) => {
      return item.id === id;
    });
    this.setState({
      detailGlasses: dataGlasses[0],
    });
  };
  handleChangeGlasses = (value, id) => {
    let dataGlasses = [...this.state.dataGlasses];
    let index = dataGlasses.findIndex((item) => {
      return item.id === id;
    });
    index += value;
    (index >= 0) & (index < dataGlasses.length) &&
      this.setState({
        detailGlasses: dataGlasses[index],
      });
  };
  render() {
    return (
      <div style={backgroundStyle}>
        <div className="container">
          <h1 style={titleStyle}>Try Glasses App Online</h1>
          <GlassesDetail
            data={this.state.detailGlasses}
            handleChangeGlasses={this.handleChangeGlasses}
          />
          <GlassesList
            data={this.state.dataGlasses}
            handleDisplayGlasses={this.handleDisplayGlasses}
          />
        </div>
      </div>
    );
  }
}
