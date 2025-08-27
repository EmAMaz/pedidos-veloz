import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        state[index].quantity += 1;
        // state[index].price += Number(action.payload.price);
        return;
      }
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        price: Number(action.payload.price),
        imagePath: action.payload.imagePath,
        quantity: 1,
      });
    },
    removeProduct: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        if (state[index].quantity > 1) {
          state[index].quantity -= 1;
          // state[index].price -= Number(action.payload.price);
        } else {
          state.splice(index, 1);
        }
      }
    },
  },
});

export const { addProduct, removeProduct } = counterSlice.actions;

export default counterSlice.reducer;
