import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchPizza = createAsyncThunk(
  'pizza/fetchPizza',
  async ( params) => {
    const {pageCount,sortId,category,searchPizza} = params
    const {data} = await axios.get(`https://62d68deb51e6e8f06f0ccc9f.mockapi.io/items?&page=${pageCount}&limit=4&sortBy=${sortId.propertyValue}&${category}&order=desc&search=${searchPizza}`)
    return data
  }
)


export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    items:[],
    status:'loading'
  },
  reducers: {
    setItem: (state, action) => {
      state.items = action.payload
    },
  },
  extraReducers: {
    [fetchPizza.pending]: (state) => {
      state.items = []
      state.status = 'loading'
    },
    [fetchPizza.fulfilled]: (state,action) => {
      state.items = action.payload
      state.status = 'fulfilled'
    },
    [fetchPizza.rejected]: (state,action) => {
      state.items = []
      state.status = 'rejected'
    }
  }

})

export const { setItem,  } = pizzaSlice.actions

export default pizzaSlice.reducer
