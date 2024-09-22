// src/features/itemsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  searchTerm: '',
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setItems, setSearchTerm } = itemsSlice.actions;
export default itemsSlice.reducer;
