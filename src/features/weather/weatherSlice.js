import { createSlice } from "@reduxjs/toolkit";


export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: "Aberyswyth",
    state: "Ceredigion",
    metadata: {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n'
      },
    temperature: "15.3"
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    }
  },
});

export const { setCity, setState } = weatherSlice.actions;

export default weatherSlice.reducer;
