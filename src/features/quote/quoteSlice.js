import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
    name: "quote",
    initialState: {
      quote: "Keep on trying until this works",
      author: "Me"
    },
  });
  
  export default quoteSlice.reducer;