import React, { useEffect } from "react"
import "./App.css"

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
import MyProfile from "./containers/MyProfile/MyProfile"
import CreateGroup from "./containers/CreateGroup/CreateGroup"
import ManageGroup from "./containers/ManageGroup/ManageGroup"
import LandingPage from "./containers/LandingPage/LandingPage"
import Logout from "./containers/Logout/Logout"
import NotFound404 from "./containers/404NotFound/NotFound404"
import { loginIfOldTokenPresent } from "./store/slices/auth"
import { useDispatch, useSelector } from "react-redux"
import { RootType } from "./store/rootReducer"
import EditGroup from "./containers/EditGroup/EditGroup"

function App() {
    const isAuthenticated = useSelector<RootType, boolean>(
        (state) => state.auth.token !== null
    )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loginIfOldTokenPresent())
    }, [])

    let routes = (
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" exact component={Login} />
            <Route path="*" component={NotFound404} />
            {/* <Redirect to="/" /> */}
        </Switch>
    )

    if (isAuthenticated) {
        routes = (
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/login" exact component={Login} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/openGroups" exact component={OpenGroups} />
                <Route path="/user/:id" exact component={UserInfo} />
                <Route path="/group/create" exact component={CreateGroup} />
                <Route path="/group/manage/:id" exact component={ManageGroup} />
                <Route path="/group/edit/:id" exact component={EditGroup} />
                <Route path="/group/:id" exact component={GroupInfo} />
                {/* TODO: this should be /group/apply/:id  */}
                <Route path="/apply/:id" exact component={Apply} />
                <Route path="/myApps" exact component={MyApps} />
                <Route path="/myGroups" exact component={MyGroups} />
                <Route path="/myInvites" exact component={MyInvites} />
                <Route path="/myProfile" exact component={MyProfile} />
                <Route path="*" component={NotFound404} />
                {/* <Redirect to="/" /> */}
            </Switch>
        )
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Layout>{routes}</Layout>
            </div>
        </BrowserRouter>
    )
}

export default App
