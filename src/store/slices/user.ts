import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import * as Types from "../../generated/graphql"

export interface UserState {
    user: any | null
    loading: string
}

const initialState: UserState = {
    user: null,
    loading: "idle",
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<any>) => {
            console.log("Got payload", action.payload)
            state.user = action.payload
        },
    },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
