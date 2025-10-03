import { createSlice } from '@reduxjs/toolkit';
const initialState = {
   items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
   count: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : 0,
}

const countSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addItem: (state, action) => {
         state.count += 1
         state.items.push(action.payload)
         console.log(action.payload);
         localStorage.setItem("cart", JSON.stringify(state.items));

      },
      removeItem: (state, action) => {
         state.items = state.items.filter((item) => item.id !== action.payload);
         state.count = state.items.length;
         localStorage.setItem("cart", JSON.stringify(state.items));  
      }
   }
})

export const { addItem, removeItem } = countSlice.actions
export default countSlice.reducer
