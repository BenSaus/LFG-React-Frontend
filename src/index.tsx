import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"
import { ApolloProvider } from "@apollo/client"
import client from "./apollo-setup"

import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./store/rootReducer"

const store = configureStore({
    reducer: rootReducer,
})

ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ApolloProvider>
    </Provider>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
