import React, { Component } from "react";
import GlassesList from "./GlassesComponent/GlassesList";
import GlassesDetail from "./DetailsComponent/GlassesDetail";

const backgroundStyle = {
  backgroundImage: "linear-gradient(to left, #8942a8, #ba382f)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "100vw",
  height: "100vh",
};
const titleStyle = {
  color: "white",
  background: "rgba(0, 0, 0, 0.6)",
  width: "84%",
  margin: "0px auto 10px",
  padding: "5px 0",
};
export default class TryGlasses extends Component {
  render() {
    return (
      <div style={backgroundStyle}>
        <div className="container">
          <h1 style={titleStyle}>Try Glasses App Online</h1>
          <GlassesDetail />
          <GlassesList />
        </div>
      </div>
    );
  }
}
