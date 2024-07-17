import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface nurseryState{
    name:string,
    location: string,
    ratings: string,
    timings: string,
}

interface stateTypes {
    nurseries: nurseryState[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error:string|null,
}

const initialState:stateTypes = {
    nurseries:[],
    status:'idle',
    error:null,
}

export const fetchNursery = createAsyncThunk('user/fetchNursery', async (loc:string) => {
    const response = await axios.get(`${process.env.VITE_BACKEND_URL}/nearestNursery`, {
        params: {
            city:loc
        }
    });
    return response.data;
})

const nurserySlice = createSlice({
    name: "nursery",
    initialState,
    reducers: {},
    extraReducers:(builder)=> {
        builder
        .addCase(fetchNursery.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchNursery.fulfilled, (state, action: PayloadAction<nurseryState[]>) => {
            state.status = 'succeeded';
            state.nurseries = action.payload;
        })
        .addCase(fetchNursery.rejected, (state, action) => {
            state.error= action.error.message||null,
            state.status='failed'    
            
        })
            
    }
});

export default nurserySlice.reducer;