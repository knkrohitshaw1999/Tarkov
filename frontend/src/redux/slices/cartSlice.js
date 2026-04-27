import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// ================= LOCAL STORAGE =================

const loadCartFromStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : { products: [] };
};

const saveCartToStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const getError = (err, msg) =>
  err.response?.data || { message: msg };

// ================= ASYNC THUNKS =================

// Fetch cart
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async ({ userId, guestId }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}/api/cart`, {
        params: { userId, guestId },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(getError(err, "Fetch failed"));
    }
  }
);

// Add to cart
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/cart`, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(getError(err, "Add failed"));
    }
  }
);

// Update quantity
export const updateCartItemQuantity = createAsyncThunk(
  "cart/updateCartItemQuantity",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${BASE_URL}/api/cart`, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(getError(err, "Update failed"));
    }
  }
);

// Remove item
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async ({ productId, guestId, userId, size, color }, { rejectWithValue }) => {
    try {
      const res = await axios.delete(
        `${BASE_URL}/api/cart/${productId}`,
        {
          params: { guestId, userId, size, color },
        }
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(getError(err, "Remove failed"));
    }
  }
);

// Merge cart
export const mergeCart = createAsyncThunk(
  "cart/mergeCart",
  async ({ guestId }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/api/cart/merge`,
        { guestId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(getError(err, "Merge failed"));
    }
  }
);

// ================= SLICE =================

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: loadCartFromStorage(),
    loading: false,
    error: null,
  },
  reducers: {
    clearCart: (state) => {
      state.cart = { products: [] };
      localStorage.removeItem("cart");
    },
  },
  extraReducers: (builder) => {
    builder
      // PENDING
      .addMatcher(
        (action) =>
          action.type.startsWith("cart/") &&
          action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )

      // FULFILLED
      .addMatcher(
        (action) =>
          action.type.startsWith("cart/") &&
          action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.loading = false;

          if (action.payload?.products) {
            state.cart = action.payload;
            saveCartToStorage(action.payload);
          }
        }
      )

      // REJECTED
      .addMatcher(
        (action) =>
          action.type.startsWith("cart/") &&
          action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error =
            action.payload?.message ||
            action.error?.message ||
            "Cart error";
        }
      );
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;