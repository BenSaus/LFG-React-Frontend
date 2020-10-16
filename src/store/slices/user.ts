import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import * as Types from "../../types-and-hooks"

export interface FakeUser {
    id: string
    username: string
}

export interface UserState {
    // user: Types.UsersPermissionsUser | null
    user: FakeUser
    loading: string
}

const initialState: UserState = {
    // user: null
    user: {
        id: "34",
        username: "Ben",
    },
    loading: "idle",
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        set: (state, action: PayloadAction<Types.UsersPermissionsUser>) => {
            state.user = action.payload
        },
    },
})

export const { set } = userSlice.actions
export default userSlice.reducer
