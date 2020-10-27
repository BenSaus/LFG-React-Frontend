import React, { useEffect } from "react"
import "./App.css"

import { ApolloProvider } from "@apollo/client"
import client from "./apollo-setup"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"

import Layout from "./containers/Layout/Layout"
import Login from "./containers/Login/Login"
import OpenGroups from "./containers/OpenGroups/OpenGroups"
import GroupInfo from "./containers/GroupInfo/GroupInfo"
import UserInfo from "./containers/UserInfo/UserInfo"
import Apply from "./containers/Apply/Apply"
import MyApps from "./containers/MyApps/MyApps"
import MyGroups from "./containers/MyGroups/MyGroups"
import MyInvites from "./containers/MyInvites/MyInvites"
import CreateGroup from "./containers/CreateGroup/CreateGroup"
import ManageGroup from "./containers/ManageGroup/ManageGroup"
import NotFound404 from "./containers/404NotFound/NotFound404"
import LandingPage from "./containers/LandingPage/LandingPage"
import Logout from "./containers/Logout/Logout"
import { loginIfOldTokenPresent } from "./store/slices/auth"
import { useDispatch, useSelector } from "react-redux"
import { RootType } from "./store/rootReducer"

function App() {
    const isAuthenticated = useSelector<RootType, boolean>(
        (state) => state.auth.token !== null
    )
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("Checking for old token...")
        dispatch(loginIfOldTokenPresent())
    }, [])

    let routes = (
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" exact component={Login} />
            {/* <Route path="*" component={NotFound404} /> */}
            <Redirect to="/" />
        </Switch>
    )

    console.log("App: ", isAuthenticated)

    if (isAuthenticated) {
        console.log("Using authenticated routes")

        routes = (
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/login" exact component={Login} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/openGroups" exact component={OpenGroups} />
                <Route path="/user/:id" exact component={UserInfo} />
                <Route path="/group/create" exact component={CreateGroup} />
                <Route path="/group/manage/:id" exact component={ManageGroup} />
                <Route path="/group/:id" exact component={GroupInfo} />
                {/* TODO: this should be /group/apply/:id  */}
                <Route path="/apply/:id" exact component={Apply} />
                <Route path="/myApps" exact component={MyApps} />
                <Route path="/myGroups" exact component={MyGroups} />
                <Route path="/myInvites" exact component={MyInvites} />
                {/* <Route path="*" component={NotFound404} /> */}
                <Redirect to="/" />
            </Switch>
        )
    }

    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <div className="App">
                    <Layout>{routes}</Layout>
                </div>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App
