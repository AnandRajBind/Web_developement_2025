import { createSlice } from '@reduxjs/toolkit';

const initialState = {
counter: 0
}

const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1
        },
        increaseByXAmount: (state, action) => {
            state.counter += action.payload
        }
    }
})

const {increment, decrement, increaseByXAmount }= CounterSlice.actions;
export default CounterSlice.reducer;
