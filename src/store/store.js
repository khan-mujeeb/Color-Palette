import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./slice/paletteSlice";

export default configureStore({
    reducer: {
        image: imageReducer
    },
});
