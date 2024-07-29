import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export interface Review {
    name: string;
    email: string;
    rating: number;
    review: string;
}

interface ReviewState {
    name: string;
    email: string;
    rating: number;
    review: string;
    reviews: Review[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    postStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
    postError: string | null;
}

const initialState:ReviewState = {
    name: "",
    email: "",
    rating: 0,
    review: "",
    reviews: [], 
    status: "idle", 
    error: null,
    postStatus: "idle", 
    postError: null
};

const postReview = createAsyncThunk(
    'review/postReview',
    async (reviewData) => {
            const response = await axios.post('/api/reviews', reviewData);
            return response.data;
    }
);

export const fetchReviews = createAsyncThunk(
    'review/fetchReviews',
    async (productId) => {
            const response = await axios.get(`/api/reviews/${productId}`);
            return response.data;       
    }
);

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchReviews.fulfilled, (state, action: PayloadAction<Review[]>) => {
                state.status = "succeeded";
                state.reviews = action.payload;
            })
            .addCase(fetchReviews.rejected, (state) => {
                state.status = "failed";
                state.error = 'An error occurred';
            })
            .addCase(postReview.pending, (state) => {
                state.postStatus = "loading";
            })
            .addCase(postReview.fulfilled, (state, action:PayloadAction<Review>) => {
                state.postStatus = "succeeded";
                state.review(action.payload);
            })
            .addCase(postReview.rejected, (state) => {
                state.postStatus = "failed";
                state.postError = 'An error occurred'
            });
    }
});

export default reviewSlice.reducer;
