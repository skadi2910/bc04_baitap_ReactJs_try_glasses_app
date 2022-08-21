import {
  CLEAR,
  DISPLAY,
  NEXT,
  PREVIOUS,
} from "../constants/tryGlasses.constant";
import data from "../dataGlasses.json";

const initialState = {
  dataGlasses: data,
  detailGlasses: "",
};

export const glassesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DISPLAY: {
      return {
        ...state,
        detailGlasses: state.dataGlasses.find(({ id }) => {
          return id === payload;
        }),
      };
    }
    case PREVIOUS: {
      let index =
        state.dataGlasses.findIndex(({ id }) => {
          return id === payload;
        }) - 1;
      if (index >= 0)
        return { ...state, detailGlasses: state.dataGlasses[index] };
      return { ...state };
    }
    case NEXT: {
      let index =
        state.dataGlasses.findIndex(({ id }) => {
          return id === payload;
        }) + 1;
      if (index < state.dataGlasses.length)
        return { ...state, detailGlasses: state.dataGlasses[index] };
      return { ...state };
    }
    case CLEAR: {
      return { ...state, detailGlasses: "" };
    }
    default:
      return state;
  }
};
