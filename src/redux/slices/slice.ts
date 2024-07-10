import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  totalPrice: number;
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

export const fetchCart = createAsyncThunk("user/fetchCart",async () => {
  const response = await axios.get(`${process.env.VITE_BACKEND_URL}/user/cart`);
  return response.data;
})

export const addItemToCart = createAsyncThunk('cart/addItemToCart', async (item) => {
  const response = await axios.post(`${process.env.VITE_BACKEND_URL}/user/cart`, item);
  return response.data;
});

export const removeItemFromCart = createAsyncThunk('cart/removeItemFromCart', async (id) => {
  const response = await axios.delete(`${process.env.VITE_BACKEND_URL}/${id}`);
  return response.data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchCart.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchCart.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
      state.status = 'succeeded';
      state.items = action.payload;
      state.totalQuantity = action.payload.length;
      state.totalAmount = action.payload.reduce((sum, item) => sum + item.totalPrice, 0);
    })
    .addCase(fetchCart.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message||null;
    })
    .addCase(addItemToCart.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
      state.totalQuantity = action.payload.length;
      state.totalAmount = action.payload.reduce((sum, item) => sum + item.totalPrice, 0);
    })
    .addCase(removeItemFromCart.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
      state.totalQuantity = action.payload.length;
      state.totalAmount = action.payload.reduce((sum, item) => sum + item.totalPrice, 0);
    });
  }
    
  });
  
  export default cartSlice.reducer;