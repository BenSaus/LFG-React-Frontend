import React from "react"
import { RouteComponentProps } from "react-router"
import { useSelector } from "react-redux"
import { RootType } from "store/rootReducer"

import { Button } from "@material-ui/core"

interface LandingPageProps extends RouteComponentProps {}

const LandingPage: React.FC<LandingPageProps> = (props) => {
    const isAuthenticated = useSelector<RootType, boolean>(
        (state) => state.auth.token !== null
    )

    return (
        <div>
            <h1>Welcome to LFG</h1>
            <p>Find others that love Escape rooms like you do</p>

            {!isAuthenticated ? (
                <React.Fragment>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ margin: "0.5rem" }}
                    >
                        Sign-up
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ margin: "0.5rem" }}
                        onClick={() => {
                            props.history.push("/login")
                        }}
                    >
                        Login
                    </Button>
                </React.Fragment>
            ) : null}
        </div>
    )
}

export default LandingPage
