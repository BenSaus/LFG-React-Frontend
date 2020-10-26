import React from 'react'
import { RouteComponentProps } from 'react-router'

interface LandingPageProps extends RouteComponentProps {

}

const LandingPage: React.FC<LandingPageProps> = (props) => {
    return (
        <div>
            <h1>Welcome to LFG</h1>
            <p>Find others that love Escape rooms like you do</p>
            <button>Sign-up</button>
            <button onClick={() => {props.history.push('/login')}}>Login</button>
        </div>
    )
}

export default LandingPage