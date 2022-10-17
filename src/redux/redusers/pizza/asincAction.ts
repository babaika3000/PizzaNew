import {createAsyncThunk} from "@reduxjs/toolkit";
import {PizzaItem, SearchPizzaItems} from "./types";
import axios from "axios";

export const fetchPizza = createAsyncThunk(
    'pizza/fetchPizza',
    async (params: SearchPizzaItems) => {
        const {pageCount, sortId, category, searchPizza} = params
        const {data} = await axios.get(`https://62d68deb51e6e8f06f0ccc9f.mockapi.io/items?&page=${pageCount}&limit=4&sortBy=${sortId}&${category}&order=desc&search=${searchPizza}`)
        return data as PizzaItem[];
    })
