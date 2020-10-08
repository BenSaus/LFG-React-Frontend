import React from "react"
import "./App.css"

import { ApolloProvider } from "@apollo/client"
import client from "./apollo-setup"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Layout from "./components/Layout/Layout"
import FrontPage from "./containers/FrontPage/FrontPage"
import GroupInfo from "./containers/GroupInfo/GroupInfo"
import UserInfo from "./containers/UserInfo/UserInfo"
import Apply from "./containers/Apply/Apply"
import MyApps from "./containers/MyApps/MyApps"
import MyGroups from "./containers/MyGroups/MyGroups"
import MyInvites from "./containers/MyInvites/MyInvites"
import CreateGroup from "./containers/CreateGroup/CreateGroup"

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <div className="App">
                    <Layout>
                        <Switch>
                            <Route path="/" exact component={FrontPage} />
                            <Route
                                path="/user/:id"
                                exact
                                component={UserInfo}
                            />
                            <Route
                                path="/group/create"
                                exact
                                component={CreateGroup}
                            />
                            <Route
                                path="/group/:id"
                                exact
                                component={GroupInfo}
                            />

                            {/* Maybe this should be /group/id/apply? */}
                            <Route path="/apply/:id" exact component={Apply} />
                            <Route path="/myApps" exact component={MyApps} />
                            <Route
                                path="/myGroups"
                                exact
                                component={MyGroups}
                            />
                            <Route
                                path="/myInvites"
                                exact
                                component={MyInvites}
                            />
                        </Switch>
                    </Layout>
                </div>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App
