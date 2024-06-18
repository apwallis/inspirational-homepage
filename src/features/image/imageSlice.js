import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
  name: "image",
  initialState: {
    imageUrls: [
        'https://images.unsplash.com/photo-1433086966358-54859d0ed716?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMDI0NTh8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHx8fHwxNzE4NzAxNjUyfDA&ixlib=rb-4.0.3&q=85',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMDI0NTh8MHwxfHNlYXJjaHwyfHxuYXR1cmV8ZW58MHx8fHwxNzE4NzAxNjUyfDA&ixlib=rb-4.0.3&q=85',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMDI0NTh8MHwxfHNlYXJjaHwzfHxuYXR1cmV8ZW58MHx8fHwxNzE4NzAxNjUyfDA&ixlib=rb-4.0.3&q=85',
        'https://images.unsplash.com/photo-1426604966848-d7adac402bff?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMDI0NTh8MHwxfHNlYXJjaHw0fHxuYXR1cmV8ZW58MHx8fHwxNzE4NzAxNjUyfDA&ixlib=rb-4.0.3&q=85',
        'https://images.unsplash.com/photo-1501854140801-50d01698950b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMDI0NTh8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHx8fHwxNzE4NzAxNjUyfDA&ixlib=rb-4.0.3&q=85'
      ],
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
});

export const { switchToNextBackgroundImage, switchToPreviousBackgroundImage } = imageSlice.actions;
export const selectImage = (state) => state.image.imageUrls[state.image.currentImageIndex];
export default imageSlice.reducer;
