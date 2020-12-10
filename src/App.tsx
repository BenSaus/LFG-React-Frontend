import React, { useEffect } from "react"
import "./App.css"

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"

import Layout from "./containers/Layout/Layout"
import Login from "./containers/Login/Login"
import OpenGroups from "./containers/OpenGroups/OpenGroups"
import OpenUsers from "./containers/OpenUsers/OpenUsers"
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
import EditGroup from "./containers/EditGroup/EditGroup"
import Chat from "./containers/Chat/Chat"
import { loginIfOldTokenPresent } from "./store/slices/auth"
import { useDispatch, useSelector } from "react-redux"
import { RootType } from "./store/rootReducer"

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
            <Route path={`${process.env.PUBLIC_URL}/`} exact component={LandingPage} />
            <Route path={`${process.env.PUBLIC_URL}/login`} exact component={Login} />
            <Route path={`${process.env.PUBLIC_URL}/*`} component={NotFound404} />
            {/* <Redirect to="/" /> */}
        </Switch>
    )

    if (isAuthenticated) {
        routes = (
            <Switch>
                <Route
                    path={`${process.env.PUBLIC_URL}/`}
                    exact
                    component={LandingPage}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/login`}
                    exact
                    component={Login}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/logout`}
                    exact
                    component={Logout}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/openGroups`}
                    exact
                    component={OpenGroups}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/openUsers/:groupId`}
                    exact
                    component={OpenUsers}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/user/:id`}
                    exact
                    component={UserInfo}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/group/create`}
                    exact
                    component={CreateGroup}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/group/manage/:id`}
                    exact
                    component={ManageGroup}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/group/edit/:id`}
                    exact
                    component={EditGroup}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/group/:id`}
                    exact
                    component={GroupInfo}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/group/chat/:id`}
                    exact
                    component={Chat}
                />
                {/* TODO: this should be /group/apply/:id  */}
                <Route
                    path={`${process.env.PUBLIC_URL}/apply/:id`}
                    exact
                    component={Apply}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/myApps`}
                    exact
                    component={MyApps}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/myGroups`}
                    exact
                    component={MyGroups}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/myInvites`}
                    exact
                    component={MyInvites}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/myProfile`}
                    exact
                    component={MyProfile}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/*`}
                    component={NotFound404}
                />
                {/* <Redirect to="/" /> */}
            </Switch>
        )
    }

    return (
        <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
            <div className="App">
                <Layout>{routes}</Layout>
            </div>
        </BrowserRouter>
    )
}

export default App
