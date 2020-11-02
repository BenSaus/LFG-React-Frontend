import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import * as Types from "../../generated/graphql"
import apolloClient from "../../apollo-setup"
import { MY_APPLICATIONS } from "../../graphql/queries"

interface ApplicationsState {
    applications: Types.Application[]
    loading: string
}

const initialState: ApplicationsState = {
    applications: [],
    loading: "idle",
}

// Create async thunks here
export const fetchApplications = createAsyncThunk(
    "applications/fetch",
    async () => {
        try {
            const resp = await apolloClient.query({
                query: MY_APPLICATIONS,
                variables: {
                    applicant: 34,
                },
            })
            console.log(resp)

            return resp.data.applications
        } catch (error) {
            console.error(error)
        }
    }
)

const applicationsSlice = createSlice({
    name: "applications",
    initialState: initialState,
    reducers: {
        set: (state, action: PayloadAction<Types.Application[]>) => {
            state.applications = action.payload
            // WARNING: TODO: Return here????
            return state
        },
        add: (state, action: PayloadAction<Types.Application>) => {
            state.applications.push(action.payload)
        },
        remove: (state, action: PayloadAction<string>) => {
            state.applications = state.applications.filter(
                (app) => app.id !== action.payload
            )
        },
    },
    extraReducers: (builder) => {
        // Add async thunks as cases to the builder object
        builder.addCase(fetchApplications.fulfilled, (state, action) => {
            // call dispatch actions here
            const payload = action.payload
            console.log("payload", payload)
            state.applications = payload
            state.loading = "idle"
        })

        builder.addCase(fetchApplications.pending, (state, action) => {
            state.loading = "loading"
        })
    },
})

export const { set, add, remove } = applicationsSlice.actions

export default applicationsSlice.reducer
