import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
    name: "image",
    initialState: {
        selectedImage: null,
        palette: [],
    },
    reducers: {
        setImage: (state, action) => {
            state.selectedImage = action.payload
        },
        resetImage: (state) => {
            state.selectedImage = null
        },
        setPalette: (state, action) => {
            state.palette = action.payload
        },
        resetPalette: (state) => {
            state.palette = []
        }
    }
});

// Action creators are generated for each case reducer function

export const { setImage, resetImage, setPalette, resetPalette} = imageSlice.actions;

export default imageSlice.reducer;