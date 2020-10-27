import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LOG_IN } from "../../graphql/queries"
import * as Types from "../../types-and-hooks"
import { ApolloClient, InMemoryCache } from "@apollo/client"

// Setup the apollo client
const client = new ApolloClient({
    // TODO: Move to config file
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "network-only",
        },
    },
})

export interface AuthState {
    token: any | null
    user: Types.UsersPermissionsMe | null
    error: string | null
    loading: boolean
}

const initialState: AuthState = {
    token: null,
    user: null,
    error: null,
    loading: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        authStart: (state) => {
            state.loading = true
        },
        authSuccess: (
            state,
            action: PayloadAction<Types.UsersPermissionsLoginPayload>
        ) => {
            console.log("Got payload", action.payload)
            state.token = action.payload.jwt
            state.user = action.payload.user
            state.loading = false
            // Remove previous errors if we successfully login
            state.error = null
        },
        authFailure: (state, action: PayloadAction<string>) => {
            console.log("Failed to login -- ", action.payload)
            state.error = action.payload
            state.loading = false
        },
        authLogout: (state) => {
            console.log("Logging out")
            state.token = null
            state.user = null
            state.loading = false
        },
    },
})

export const {
    authSuccess,
    authFailure,
    authStart,
    authLogout,
} = authSlice.actions
export default authSlice.reducer

export const login = (username: string, password: string) => async (
    // TODO: Get the type for the dispatch function
    dispatch: any
) => {
    try {
        console.log("Logging-in...")
        dispatch(authStart())

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

        // WARNING: TODO: This is insecure
        localStorage.setItem("authJSON", JSON.stringify(resp.data.login))
        const auth = resp.data.login

        dispatch(authSuccess(auth))
    } catch (err) {
        dispatch(authFailure(err.toString()))
    }
}

const checkAuthExpiration = (expirationTime: number) => {
    return (dispatch: any) => {
        setTimeout(() => {
            dispatch(authLogout())
        }, expirationTime)
    }
}

export const logout = () => async (dispatch: any) => {
    try {
        console.log("Logging out...")

        localStorage.removeItem("authJSON")
        dispatch(authLogout())
    } catch (err) {}
}

export const loginIfOldTokenPresent = () => {
    return (dispatch: any) => {
        const authJSON = localStorage.getItem("authJSON")

        if (authJSON !== null) {
            const auth = JSON.parse(authJSON)
            dispatch(authSuccess(auth))
        }
    }
}
