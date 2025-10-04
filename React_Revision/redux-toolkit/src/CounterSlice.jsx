import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    data: 1
}

//slice 
const CounterSlice = createSlice({
    // initial state 
    name: 'counter',
    initialState,
    // reducers 
    reducers: {
        // actions 
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
export const { increment, decrement, increaseByXAmount } = CounterSlice.actions;
export default CounterSlice.reducer;
