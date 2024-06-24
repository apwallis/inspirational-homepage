import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import openWeatherApi from "../../api/openWeatherApi";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  ({ city, state }) => openWeatherApi.getWeather(city, state)
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: "Aberystwyth",
    state: "UK",
    metadata: {},
    temperature: "",
    pressure: "",
    humidity: "",
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    }
  },
  extraReducers: {
    [getWeather.fulfilled]: (state, action) => {
      state.metadata = action.payload.weatherMetadata;
      state.temperature = action.payload.temperature;
      state.pressure = action.payload.pressure;
      state.humidity = action.payload.humidity;
    }
  }
});

export const { setCity, setState } = weatherSlice.actions;

export default weatherSlice.reducer;
