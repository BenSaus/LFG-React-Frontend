import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import client from "../../apollo-setup"
import { LOG_IN } from "../../graphql/queries"
import * as Types from "../../types-and-hooks"

export interface AuthState {
    auth: any | null
    error: string | null
}

const initialState: AuthState = {
    auth: null,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        getAuthSuccess: (state, action: PayloadAction<any>) => {
            console.log("Got payload", action.payload)
            state.auth = action.payload
        },
        getAuthFailure: (state, action: PayloadAction<any>) => {
            console.log("Failed to login -- ", action.payload)
            state.error = action.payload
        },
    },
})

export const { getAuthSuccess, getAuthFailure } = authSlice.actions
export default authSlice.reducer

export const fetchAuth = (username: string, password: string) => async (
    // TODO: Get the type for the dispatch function
    dispatch: any
) => {
    try {
        console.log("Calling auth api")
        const resp = await client.mutate({
            mutation: LOG_IN,
            variables: {
                identifier: username,
                password: password,
            },
            // Ensure that we do not cache the token
            fetchPolicy: "no-cache",
        })
        console.log("resp", resp)

        dispatch(getAuthSuccess(resp.data.login))
    } catch (err) {
        dispatch(getAuthFailure(err.toString()))
    }
}
