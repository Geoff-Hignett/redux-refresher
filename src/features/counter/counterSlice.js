import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count ++;
        },
        decrement: (state) => {
            state.count --;
        },
        addByAmount: (state, action) => {
            state.count += action.payload;
        },
        reset: (state) => {
            state.count = 0;
        },
    }
})

export const { increment, decrement, addByAmount, reset } = counterSlice.actions;

export default counterSlice.reducer;