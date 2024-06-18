import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../features/image/imageSlice';
import quoteReducer from "../features/quote/quoteSlice";
import weatherReducer from '../features/weather/weatherSlice';

export const store = configureStore({
  reducer: {
    image: imageReducer,
    quote: quoteReducer,
    weather: weatherReducer,
  },
});
