import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {id: "1", content: "task 1"},
    {id: "2", content: "task 2"},
    {id: "3", content: "task 3"},
]
export const tasks = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        }
    }
})


export const {addTask} = tasks.actions
export default tasks.reducer