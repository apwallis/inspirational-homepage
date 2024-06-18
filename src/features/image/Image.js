import React from "react";
import { useSelector } from "react-redux";
import { selectImage } from "./imageSlice";


export default function Image() {
    const imageUrl = useSelector(selectImage);
  
    return (
        <div style={{ 
            backgroundImage: `url("${imageUrl}")` 
          }}>
            
        </div>
    );
};