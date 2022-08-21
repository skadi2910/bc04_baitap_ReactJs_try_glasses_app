import {
  CLEAR,
  DISPLAY,
  NEXT,
  PREVIOUS,
} from "../constants/tryGlasses.constant";

export const displayGlasses = (glassesId) => {
  return {
    type: DISPLAY,
    payload: glassesId,
  };
};

export const previousGlasses = (glassesId) => {
  return {
    type: PREVIOUS,
    payload: glassesId,
  };
};

export const nextGlasses = (glassesId) => {
  return {
    type: NEXT,
    payload: glassesId,
  };
};

export const clearGlasses = () => {
  return {
    type: CLEAR,
  };
};
