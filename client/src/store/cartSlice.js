// store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Function to save the cart state to localStorage (only on the client side)
const saveStateToLocalStorage = (state) => {
  if (typeof window !== 'undefined') {  // Ensure we are on the client side
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('cartState', serializedState);
    } catch (e) {
      console.error("Could not save state", e);
    }
  }
};

// Function to load the cart state from localStorage (only on the client side)
const loadStateFromLocalStorage = () => {
  if (typeof window !== 'undefined') {  // Ensure we are on the client side
    try {
      const serializedState = localStorage.getItem('cartState');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (e) {
      console.error("Could not load state", e);
      return undefined;
    }
  }
  return undefined; // Return undefined if on the server side
};

const initialState = loadStateFromLocalStorage() || {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i._id === item._id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += item.newPrice;
      } else {
        state.items.push({ ...item, quantity: 1, totalPrice: item.newPrice });
      }
      state.totalAmount += item.newPrice;
      saveStateToLocalStorage(state);  // Save state after modification
    },
    removeItemFromCart: (state, action) => {
      const _id = action.payload;
      const item = state.items.find(i => i._id === _id);
      if (item) {
        state.totalAmount -= item.totalPrice;
        state.items = state.items.filter(i => i._id !== _id);
      }
      saveStateToLocalStorage(state);  // Save state after modification
    },
    incrementQuantity: (state, action) => {
      const _id = action.payload;
      const item = state.items.find(i => i._id === _id);
      if (item) {
        item.quantity += 1;
        item.totalPrice += item.newPrice;
        state.totalAmount += item.newPrice;
      }
      saveStateToLocalStorage(state);  // Save state after modification
    },
    decrementQuantity: (state, action) => {
      const _id = action.payload;
      const item = state.items.find(i => i._id === _id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice -= item.newPrice;
        state.totalAmount -= item.newPrice;
      }
      saveStateToLocalStorage(state);  // Save state after modification
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      saveStateToLocalStorage(state);  // Save state after modification
    },
  },
});

export const { addItemToCart, removeItemFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
