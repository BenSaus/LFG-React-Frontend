import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: 121212,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
    },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice

// https://redux-toolkit.js.org/tutorials/intermediate-tutorial
