import { createSlice } from "@reduxjs/toolkit";
import { loadingCompleted } from "./loadingSlice";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        value: []
    },
    reducers: {
        updateTodo: (state, action) => {
            const updatedTodo = action.payload
            state.value = updatedTodo
        }
    },
    extraReducers: (builder) => [
        builder.addCase(loadingCompleted, (state, action) => {
            state.value = action.payload
        })
    ]
})

export const { updateTodo } = todoSlice.actions