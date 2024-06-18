import React from "react";
import { useSelector } from "react-redux";
import { selectImage } from "./imageSlice";


export default function Image() {
    const imageUrl = useSelector(selectImage);

    return (
        <div style={{ 
            backgroundImage: `url(${imageUrl})`,
            width: '100vw',
            height: '100vh', 
          }}>
        
            Hello World
        </div>
    );
}