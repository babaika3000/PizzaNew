import {createSlice} from '@reduxjs/toolkit'

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    sort: {name: 'популярности', propertyValue: 'rating'},
    categorei: 0,
    searchPizza: '',
    pageCount: 1,
  },
  reducers: {
    setSortId: (state, action) => {
      state.sort = action.payload
    },
    setCategories: (state, action) => {
      state.categorei = action.payload

    },
    setSearchPizza: (state, action) => {
      state.searchPizza = action.payload

    },
    setPageCount: (state, action) => {
      state.pageCount = action.payload

    },
    setFilters: (state, action) => {
      state.sort = action.payload.sort
      state.pageCount = Number(action.payload.pageCount)
      state.categorei = Number(action.payload.categorei)

    },
  }
})

export const {setSortId, setCategories, setSearchPizza, setPageCount, setFilters,} = filtersSlice.actions

export default filtersSlice.reducer
