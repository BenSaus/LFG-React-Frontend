import { combineReducers, configureStore } from "@reduxjs/toolkit"

import applicationsSlice from "./slices/applications"
import counterSlice from "./slices/counter"
import tasksSlice from "./slices/tasks"
import userSlice from "./slices/user"

const rootReducer = combineReducers({
    counter: counterSlice.reducer,
    applications: applicationsSlice,
    tasks: tasksSlice,
    user: userSlice,
})

export type RootType = ReturnType<typeof rootReducer>

export default rootReducer
