import { createSlice } from "@reduxjs/toolkit";
import { getWeather } from "../weather/weatherSlice";

export const errorSlice = createSlice({
  name: "errors",
  initialState: {
    errorMessage: "",
    retryHandler: null
  },
  reducers: {
    clearErrorMessage: (state) => {
      state.errorMessage = "";
      state.retryHandler = null;
    }
  },
  extraReducers: {
    [getWeather.rejected]: (state) => {
      state.errorMessage = "Getting the weather failed.";
      state.retryHandler = getWeather;
    }
  }
});

export const { clearErrorMessage } = errorSlice.actions;

export default errorSlice.reducer;
