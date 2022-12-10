import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {}
});

console.log(mainSlice);

export default mainSlice.reducer;