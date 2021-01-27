import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect, RouteComponentProps } from "react-router"

import { RootType } from "store/rootReducer"
import { login } from "store/slices/auth"

import { useFormik } from "formik"

import { Button, TextField } from "@material-ui/core"

interface LoginProps extends RouteComponentProps {}

const Login: React.FC<LoginProps> = (props) => {
    const loading = useSelector<RootType, boolean>(
        (state) => state.auth.loading
    )
    const loginError = useSelector<RootType, string | null>(
        (state) => state.auth.error
    )
    const isAuthenticated = useSelector<RootType, boolean>(
        (state) => state.auth.token !== null
    )

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: async (values, actions) => {
            // TODO: sanitize and check that both are valid here...
            try {
                await dispatch(
                    login(formik.values.username, formik.values.password)
                )
            } catch (error) {
                console.error(error)
            }
        },
    })

    if (loading) {
        return (
            <React.Fragment>
                <h1>Login</h1>
                <h3>Loading...</h3>
            </React.Fragment>
        )
    }

    if (isAuthenticated) {
        return <Redirect to="/openGroups" />
    }

    return (
        <React.Fragment>
            <h1>Login</h1>

            <form onSubmit={formik.handleSubmit}>
                <TextField
                    style={{ margin: "0.25rem" }}
                    id="username"
                    name="username"
                    label="Username"
                    variant="outlined"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                />
                <br />
                <TextField
                    style={{ margin: "0.25rem" }}
                    label="Password"
                    variant="outlined"
                    id="password"
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />

                <br />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ margin: "0.5rem" }}
                >
                    Submit
                </Button>
            </form>
            {loginError}
        </React.Fragment>
    )
}

export default Login
