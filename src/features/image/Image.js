import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectImage } from "./imageSlice";


export default function Image() {
    const imageUrl = useSelector(selectImage);

    return (
        <div id="background-image-container">
          <img src={imageUrl} alt="" id="background-image" />
        </div>
      );
}