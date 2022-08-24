import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from "./redusers/filtersSliceReduer";
import cartSlice from "./redusers/cartSilce";

export default configureStore({
    reducer: {
        filtersSlice,
        cartSlice,
    }
})
