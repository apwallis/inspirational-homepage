import { createSlice } from "@reduxjs/toolkit";

export const goalsSlice = createSlice({
  name: "goals",
  initialState: {
    entries: [
      { text: "Finish Project", isDone: false },
      { text: "Finish Course", isDone: false },
      { text: "Find out what's next", isDone: false },
      { text: "Profit", isDone: false }
    ],
    doneEntries: []
  },
  reducers: {
    addEntry: (state, action) => {
      state.entries.push({ text: action.payload, isDone: false });
    },
    removeEntry: (state, action) => {
      state.entries.splice(action.payload, 1);
    },
    toggleEntryDone: (state, action) => {
      state.entries[action.payload].isDone = !state.entries[action.payload]
        .isDone;
    }
  }
});

export const {
  addEntry,
  removeEntry,
  toggleEntryDone
} = goalsSlice.actions;

export default goalsSlice.reducer;
