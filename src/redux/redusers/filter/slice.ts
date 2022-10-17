import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IFiltersSlice, SortPropertyVale, SortType} from "./types";



const initialState: IFiltersSlice = {
    sort: {name: 'популярности', propertyValue: SortPropertyVale.RATING},
    categorei: 0,
    searchPizza: '',
    pageCount: 1,
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSortId: (state, action: PayloadAction<SortType>) => {
            state.sort = action.payload
        },
        setCategories: (state, action: PayloadAction<number>) => {
            state.categorei = action.payload

        },
        setSearchPizza: (state, action: PayloadAction<string>) => {
            state.searchPizza = action.payload

        },
        setPageCount: (state, action: PayloadAction<number>) => {
            state.pageCount = action.payload

        },
        setFilters: (state, action: PayloadAction<IFiltersSlice>) => {
            state.sort = action.payload.sort
            state.pageCount = Number(action.payload.pageCount)
            state.categorei = Number(action.payload.categorei)
        },
    }
})

export const {setSortId, setCategories, setSearchPizza, setPageCount, setFilters,} = filtersSlice.actions

export default filtersSlice.reducer
