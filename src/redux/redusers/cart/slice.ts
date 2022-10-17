import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {getCartLocalStorage} from "../../../utils/getCartLocalStorage";
import {calcTotalPrice} from "../../../utils/calcTotalPrice";
import {CartItem, ICartSlice} from "./types";

const {items, totalPrice} = getCartLocalStorage()

const initialState:ICartSlice  = {
    items,
    totalPrice,
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItems: (state, action: PayloadAction<CartItem>) => {
            const findItem = state.items.find((obj) => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++
            } else state.items.push({
                ...action.payload,
                count: 1
            })
            state.totalPrice = calcTotalPrice(state.items)

        },
        minusItem: (state, action: PayloadAction<string>) => {
            const findItem = state.items.find((obj) => obj.id === action.payload)
            if (findItem) {
                findItem.count--
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(obj => obj.id !== action.payload)
        },
        clearCart: (state) => {
            state.items = []
            state.totalPrice = 0
        }},
})

export const {addItems, removeItem, clearCart, minusItem} = cartSlice.actions

export default cartSlice.reducer
