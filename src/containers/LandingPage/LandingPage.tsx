import React from "react"
import { useSelector } from "react-redux"
import { RouteComponentProps } from "react-router"
import { RootType } from "../../store/rootReducer"

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
                    <button>Sign-up</button>
                    <button
                        onClick={() => {
                            props.history.push("/login")
                        }}
                    >
                        Login
                    </button>
                </React.Fragment>
            ) : null}
        </div>
    )
}

export default LandingPage
