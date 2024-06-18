import React from "react";
import { useSelector } from "react-redux";

const Quote = () => {
  const { quote, author } = useSelector((state) => state.quote);


  return (
    <div id="quote">
      <p className="quote-message">“{quote}”</p>
      <p className="quote-author">{author}</p>
    </div>
  );
};

export default Quote;