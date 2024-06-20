import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "../features/image/imageSlice";
import goalsReducer from "../features/goals/goalsSlice";
import quoteReducer from "../features/quote/quoteSlice";
import weatherReducer from "../features/weather/weatherSlice";
import errorReducer from "../features/error/errorSlice";

export default configureStore({
  reducer: {
    image: imageReducer,
    weather: weatherReducer,
    quote: quoteReducer,
    goals: goalsReducer,
    error: errorReducer
  }
});
