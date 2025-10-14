import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk('products', async () => {
   const res = await fetch("https://fakestoreapi.com/products")
   const data = await res.json()
   return data

})

const initialState = {
   items: [],
   state: "loading",
   error: null
}

const productsSlice = createSlice({
   name: "products",
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(fetchProducts.pending, (state) => {
            state.status = "loading"; // mark loading state
            state.error = null;       // reset previous errors
         })
         .addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload; // actual fetched data
            state.status = "success";
         })
         .addCase(fetchProducts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message; // save error message
         });
   }

})

// export default fetchProducts
export default productsSlice.reducer
