import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

interface TaskState {
    tasks: string[]
    loading: boolean
}

const initialState: TaskState = {
    tasks: ["Hello"],
    loading: false,
}

export const fetchTasks = createAsyncThunk("tasks/fetch", async () => {
    try {
        return ["Test", "Another String", "Redux Blows", "Heya"]
    } catch (error) {}
})

const tasksSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {
        set: (state, action: PayloadAction<TaskState>) => {
            const appSet = action.payload
            state.tasks = appSet.tasks
            return state
        },
        add: (state, action: PayloadAction<string>) => {
            state.tasks.push(action.payload)
        },
        remove: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task !== action.payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            if (action.payload !== undefined) state.tasks = action.payload
        })
    },
})

export const { set, add, remove } = tasksSlice.actions

export default tasksSlice.reducer
