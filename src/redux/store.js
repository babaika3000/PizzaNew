import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from "./redusers/filtersSliceReduer";
import cartSlice from "./redusers/cartSilce";
import pizzaSlice from "./redusers/pizzaSlice";

export default configureStore({
    reducer: {
        filtersSlice,
        cartSlice,
        pizzaSlice,
    }
})
