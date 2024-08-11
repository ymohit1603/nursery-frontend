import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const backendUrl = import.meta.env.VITE_BACKEND_URL;

interface CartItem {
  currPrice: number;
  title: string;
  imgUrl: string;
  id: number;
  name: string;
  quantity: number;
  totalPrice: number;
}

interface Product {
  quantity: number;
  plantId: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  status: 'idle',
  error: null,
};

export const fetchCart = createAsyncThunk(
  "user/fetchCart",
  async (_, {rejectWithValue }) => {
    try {
      const response = await axios.get(`${backendUrl}/user/cart`,{withCredentials:true});
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          return rejectWithValue('Unauthorized access');
        }
        return rejectWithValue(error.response?.data?.message || error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

export const addItemToCart = createAsyncThunk(
  'cart/addItemToCart',
  async (item: Product, {  rejectWithValue }) => {
    try {
      const response = await axios.post(`${backendUrl}/user/cart`, item,{withCredentials:true});
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
         
          return rejectWithValue('Unauthorized access');
        }
        return rejectWithValue(error.response?.data?.message || error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

export const removeItemFromCart = createAsyncThunk(
  'cart/removeItemFromCart',
  async (id: number, {  rejectWithValue }) => {
    try {
      const response = await axios.delete(`${backendUrl}/${id}`,{withCredentials:true});
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          return rejectWithValue('Unauthorized access');
        }
        return rejectWithValue(error.response?.data?.message || error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.totalQuantity = action.payload.length;
        state.totalAmount = action.payload.reduce((sum, item) => sum + item.totalPrice, 0);
        state.error = null;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch cart items.';
      })
      .addCase(addItemToCart.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
        state.items = action.payload;
        state.totalQuantity = action.payload.length;
        state.totalAmount = action.payload.reduce((sum, item) => sum + item.totalPrice, 0);
        state.error = null;
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to add item to cart.';
      })
      .addCase(removeItemFromCart.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
        state.items = action.payload;
        state.totalQuantity = action.payload.length;
        state.totalAmount = action.payload.reduce((sum, item) => sum + item.totalPrice, 0);
        state.error = null;
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to remove item from cart.';
      });
  }
});

export default cartSlice.reducer;