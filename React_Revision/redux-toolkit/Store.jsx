import { configureStore } from "@reduxjs/toolkit";

import SliceReducer from './CounterSlice'

export const store=configureStore({
    reducer:{
        counter:SliceReducer
    }
}) 