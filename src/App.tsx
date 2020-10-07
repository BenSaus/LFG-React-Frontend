import React from "react"
import "./App.css"

import { ApolloProvider } from "@apollo/client"
import client from "./apollo-setup"
import { BrowserRouter, Route } from "react-router-dom"

import Layout from "./components/Layout/Layout"
import FrontPage from "./containers/FrontPage/FrontPage"
import GroupInfo from "./containers/GroupInfo/GroupInfo"
import Apply from "./containers/Apply/Apply"
import MyApps from "./containers/MyApps/MyApps"
import MyGroups from "./containers/MyGroups/MyGroups"
import MyInvites from "./containers/MyInvites/MyInvites"

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <div className="App">
                    <Layout>
                        <Route path="/" exact component={FrontPage} />
                        <Route path="/group/:id" exact component={GroupInfo} />

                        {/* Maybe this should be /group/id/apply? */}
                        <Route path="/apply/:id" exact component={Apply} />
                        <Route path="/myApps" exact component={MyApps} />
                        <Route path="/myGroups" exact component={MyGroups} />
                        <Route path="/myInvites" exact component={MyInvites} />
                    </Layout>
                </div>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App
