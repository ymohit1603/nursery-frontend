import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./slices/slice";
import nurseryReducer from "./slices/nurserySlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        nursery:nurseryReducer,
    },
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

