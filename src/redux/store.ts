import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./slices/slice";
import nurseryReducer from "./slices/nurserySlice";
import scrollToContent from "./slices/scrollSlice";
import blogReducer from "./slices/blogSlice";
import reviewReducer from "./slices/reviewSlice";
import plantReducer from './slices/plantSlice'; 
import authReducer from './slices/authSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        nursery: nurseryReducer,
        scroll: scrollToContent,
        blog: blogReducer,
        review: reviewReducer,
        plants: plantReducer,
        auth: authReducer,
    },
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

