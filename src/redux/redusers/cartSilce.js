import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalPrice:0,
    items:[]
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload)
    },

  }
})

export const { addItems } = cartSlice.actions

export default cartSlice.reducer
