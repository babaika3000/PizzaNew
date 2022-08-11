import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from "./redusers/filtersSliceReduer";

export default configureStore({
    reducer: {
        filtersSlice,
    }
})
