import React, { useEffect } from "react"
import "./App.css"

import { BrowserRouter, Route, Switch } from "react-router-dom"

import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import LuxonUtils from "@date-io/luxon"

import Layout from "./containers/Layout/Layout"
import Login from "./containers/Login/Login"
import OpenGroups from "./containers/OpenGroups/OpenGroups"
import OpenUsers from "./containers/OpenUsers/OpenUsers"
import GroupInfo from "./containers/GroupInfo/GroupInfo"
import UserInfo from "./containers/UserInfo/UserInfo"
import Apply from "./containers/Apply/Apply"
import MyGroups from "./containers/MyGroups/MyGroups"
import MyProfile from "./containers/MyProfile/MyProfile"
import CreateGroup from "./containers/CreateGroup/CreateGroup"
import ManageGroup from "./containers/ManageGroup/ManageGroup"
import LandingPage from "./containers/LandingPage/LandingPage"
import Logout from "./containers/Logout/Logout"
import NotFound404 from "./containers/404NotFound/NotFound404"
import EditGroup from "./containers/EditGroup/EditGroup"
import Chat from "./containers/Chat/Chat"
import MyInvitesApps from "./containers/MyInvitesApps/MyInvitesApps"

import { loginIfOldTokenPresent } from "./store/slices/auth"
import { useDispatch, useSelector } from "react-redux"
import { RootType } from "./store/rootReducer"
import CssBaseline from "@material-ui/core/CssBaseline"

import { ThemeProvider } from "@material-ui/core"
import theme from "./theme"

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
            <Route path={`/`} exact component={LandingPage} />
            <Route path={`/login`} exact component={Login} />
            <Route path={`/*`} component={NotFound404} />
            {/* <Redirect to="/" /> */}
        </Switch>
    )

    if (isAuthenticated) {
        routes = (
            <Switch>
                <Route path={`/`} exact component={LandingPage} />
                <Route path={`/login`} exact component={Login} />
                <Route path={`/logout`} exact component={Logout} />
                <Route path={`/openGroups`} exact component={OpenGroups} />
                <Route
                    path={`/openUsers/:groupId`}
                    exact
                    component={OpenUsers}
                />
                <Route path={`/user/:id`} exact component={UserInfo} />
                <Route path={`/group/create`} exact component={CreateGroup} />
                <Route
                    path={`/group/manage/:id`}
                    exact
                    component={ManageGroup}
                />
                <Route path={`/group/edit/:id`} exact component={EditGroup} />
                <Route path={`/group/:id`} exact component={GroupInfo} />
                <Route path={`/group/chat/:id`} exact component={Chat} />
                {/* TODO: this should be /group/apply/:id  */}
                <Route path={`/apply/:id`} exact component={Apply} />
                <Route
                    path={`/myInvitesApps`}
                    exact
                    component={MyInvitesApps}
                />
                <Route path={`/myGroups`} exact component={MyGroups} />
                <Route path={`/myProfile`} exact component={MyProfile} />
                <Route path={`/*`} component={NotFound404} />
                {/* <Redirect to="/" /> */}
            </Switch>
        )
    }

    return (
        <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div className="App">
                            <Layout>{routes}</Layout>
                        </div>
                    </MuiPickersUtilsProvider>
                </CssBaseline>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
