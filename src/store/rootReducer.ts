import { combineReducers } from "@reduxjs/toolkit"

import applicationsSlice from "./slices/applications"
import counterSlice from "./slices/counter"
import tasksSlice from "./slices/tasks"
import userSlice from "./slices/user"
import authSlice from "./slices/auth"

const rootReducer = combineReducers({
    counter: counterSlice.reducer,
    applications: applicationsSlice,
    tasks: tasksSlice,
    user: userSlice,
    auth: authSlice,
})

export type RootType = ReturnType<typeof rootReducer>

export default rootReducer
