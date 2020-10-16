import { combineReducers, configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counter"
import applicationsSlice from "./applications"
import tasksSlice from "./tasks"

const rootReducer = combineReducers({
    counter: counterSlice.reducer,
    applications: applicationsSlice,
    tasks: tasksSlice,
})
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
