import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import openWeatherApi from '../../api/openWeatherApi/index';

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  ({ city, state }) => openWeatherApi.getWeather(city, state)
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: "Seattle",
    state: "Washington",
    metadata: {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d'
    },
    temperature: "",
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
    }
  }
});

export const { setCity, setState } = weatherSlice.actions;

export default weatherSlice.reducer;
