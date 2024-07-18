import { createSlice } from "@reduxjs/toolkit";

interface ScrollState {
    nurseryRef: HTMLDivElement | null;
  }
  
  const initialState: ScrollState = {
    nurseryRef: null,
  };

const scrollSlice = createSlice({
    name: "scrollToContent",
    initialState,
    reducers: {
        setNurseryRef: (state, action) => {
            state.nurseryRef = action.payload;
        },
    },
})
export const { setNurseryRef } = scrollSlice.actions;
export default scrollSlice.reducer;