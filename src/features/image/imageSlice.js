import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pexelApi from "../../api/pexel";

export const getImages = createAsyncThunk(
  "image/getImages",
  pexelApi.getImages
);

export const imageSlice = createSlice({
  name: "image",
  initialState: {
    imageUrls: [],
    currentImageIndex: 0,
  },
  reducers: {
    switchToNextBackgroundImage: (state, action) => {
        const numberOfImages = state.imageUrls.length - 1; // To fix length for correct index
        if (state.currentImageIndex === numberOfImages) {
            state.currentImageIndex = 0;
        } else {
            state.currentImageIndex = state.currentImageIndex + 1;
        }
    },
    switchToPreviousBackgroundImage: (state, action) => {
        const numberOfImages = state.imageUrls.length - 1;
        if (state.currentImageIndex === 0) {
            state.currentImageIndex = numberOfImages;
        } else {
            state.currentImageIndex = state.currentImageIndex - 1;
        }
    },
  },
  extraReducers: {
    [getImages.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.imageUrls = action.payload;
      state.currentImageIndex = 0;
    }
  },
});

export const { switchToNextBackgroundImage, switchToPreviousBackgroundImage } = imageSlice.actions;
export default imageSlice.reducer;
