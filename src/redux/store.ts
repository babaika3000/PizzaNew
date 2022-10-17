import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from "./redusers/filter/slice";
import cartSlice from "./redusers/cart/slice"
import pizzaSlice from "./redusers/pizza/slice";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        filtersSlice,
        cartSlice,
        pizzaSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>
