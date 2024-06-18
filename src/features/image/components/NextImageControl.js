import React from "react";
import { useDispatch } from "react-redux";
import { switchToNextBackgroundImage } from "../imageSlice";

const NextImageControl = () => {
  const dispatch = useDispatch();

  return (
    <button
      aria-label="Switch to next wallpaper"
      onClick={() => {
        dispatch(switchToNextBackgroundImage());
      }}
    >
      {">"}
    </button>
  );
};

export default NextImageControl;