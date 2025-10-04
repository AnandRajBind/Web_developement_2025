import { configureStore } from "@reduxjs/toolkit";

import SliceReducer from './CounterSlice'

export const Store=configureStore({
    reducer:{
     counter:SliceReducer
    }
})

