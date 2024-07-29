import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./slices/slice";
import nurseryReducer from "./slices/nurserySlice";
import scrollToContent from "./slices/scrollSlice";
import blogReducer from "./slices/blogSlice";
import reviewReducer from "./slices/reviewSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        nursery: nurseryReducer,
        scroll: scrollToContent,
        blog: blogReducer,
        review: reviewReducer,
    },
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

