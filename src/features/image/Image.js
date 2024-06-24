import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "./imageSlice";


const Image = () => {
  const { imageUrls, currentImageIndex } = useSelector(
    (state) => state.image
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div id="background-image-container">
      <img src={imageUrls[currentImageIndex]} alt="" id="background-image" />
    </div>
  );
}

export default Image;