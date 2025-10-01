import { createSlice } from '@reduxjs/toolkit';
const initialState = {
   items: []
}

const countSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addItem: (state, action) => {
         // state.items += 1
         state.items.push(action.payload)
         console.log(action.payload);
         
      },
      removeItem: (state) => {
         state.count -= 1
      },
      clearItem: (state) => {
         state.count = 0
      }
   }
})

export const { addItem, removeItem, clearItem } = countSlice.actions
export default countSlice.reducer
