import { createSlice } from '@reduxjs/toolkit'

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        sort: {name:'популярности', propertyValue:'rating'},
        categorei: 0,
        searchPizza:''
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
    }
})

export const { setSortId, setCategories , setSearchPizza } = filtersSlice.actions

export default filtersSlice.reducer
