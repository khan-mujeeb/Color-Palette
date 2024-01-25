import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
    name: "image",
    initialState: {
        selectedImage: null
    },
    reducers: {
        setImage: (state, action) => {
            state.selectedImage = action.payload
        },
        resetImage: (state) => {
            state.selectedImage = null
        }
    }
});

// Action creators are generated for each case reducer function

export const { setImage, resetImage} = imageSlice.actions;

export default imageSlice.reducer;