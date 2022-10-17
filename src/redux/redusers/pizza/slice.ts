import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import axios from "axios";
import {IPizzaSlice, PizzaItem, SearchPizzaItems, Status} from "./types";
import {fetchPizza} from "./asincAction";


const initialState: IPizzaSlice = {
    items: [],
    status: Status.LOADING
}


export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItem: (state, action: PayloadAction<PizzaItem[]>) => {
            state.items = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizza.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = Status.SUCCESS
        })
        builder.addCase(fetchPizza.rejected,
            (state,
             action) => {
                state.items = []
                state.status = Status.ERROR
            })
        builder.addCase(fetchPizza.pending, (state) => {
            state.items = []
            state.status = Status.LOADING
        })
    }
})
export const {setItem} = pizzaSlice.actions;

export default pizzaSlice.reducer
