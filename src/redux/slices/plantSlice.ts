import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const backendURL = import.meta.env.VITE_BACKEND_URL;

interface Plant {
    id: number;
    imgUrl: string;
    name: string;
    price: number;
    discountedPrice: number;
    cartButton: string;
    discount: number;
}

interface PlantState {
    plants: Plant[]; 
    loading: boolean;
    error: string | null;
  }
  
  const initialState: PlantState = {
    plants: [],
    loading: false,
    error: null,
  };
  

  export const fetchPlants = createAsyncThunk(
    'plants/fetchPlants',
    async (filters: { categoryFilter: string | null, priceFilter: string | null }) => {
      const response = await axios.get(`${backendURL}/getPlants`, {
        params: {
          category: filters.categoryFilter,
          price: filters.priceFilter,
        },
      });
        console.log(response.data);
        return response.data.plants;
    }
  );
  
 
  const plantSlice = createSlice({
    name: 'plants',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchPlants.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchPlants.fulfilled, (state, action) => {
          state.loading = false;
          state.plants = action.payload;
        })
        .addCase(fetchPlants.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to fetch plants';
        });
    },
  });

    
  export default plantSlice.reducer;