import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const backendURL = import.meta.env.VITE_BACKEND_URL;
export interface Review {
    productId: number;
    name: string;
    email: string;
    rating: number;
    reviewText: string;
}

interface ReviewState {
    reviews: Review[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    postStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
    postError: string | null;
}

const initialState: ReviewState = {
    reviews: [],
    status: "idle",
    error: null,
    postStatus: "idle",
    postError: null
};

export const postReview = createAsyncThunk<
    Review,
    Review,
    { rejectValue: string }
>(
    'review/postReview',
    async (reviewData ,{ rejectWithValue }) => {
        try {
            const response = await axios.post(`${backendURL}/review`, reviewData);
            return response.data;
        } catch (error) {
            return rejectWithValue('Failed to post review');
        }
    }
);

export const fetchReviews = createAsyncThunk<
    Review[],
    number,
    { rejectValue: string }
>(
    'review/fetchReviews',
    async (productId, { rejectWithValue }) => {
        try {
            
            const response = await axios.get(`${backendURL}/review/${productId.toString()}`);
            return response.data;
        } catch (error) {
            return rejectWithValue('Failed to fetch reviews');
        }
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
            .addCase(fetchReviews.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload || 'An error occurred';
            })
            .addCase(postReview.pending, (state) => {
                state.postStatus = "loading";
            })
            .addCase(postReview.fulfilled, (state, action: PayloadAction<Review>) => {
                state.postStatus = "succeeded";
                state.reviews.push(action.payload);
            })
            .addCase(postReview.rejected, (state, action) => {
                state.postStatus = "failed";
                state.postError = action.payload || 'An error occurred';
            });
    }
});

export default reviewSlice.reducer;
