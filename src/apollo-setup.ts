import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URL,
})

const authLink = setContext((_, { headers }) => {
    // WARNING: TODO: This is not safe and should only be done for testing
    const authJSON = localStorage.getItem("authJSON")

    // console.log("AuthLink", authJSON)

    if (authJSON !== null) {
        // console.log("AuthLink", "Setting Auth Header")
        const auth = JSON.parse(authJSON)
        return {
            headers: {
                ...headers,
                Authorization: `Bearer ${auth.jwt}`,
            },
        }
    } else {
        // console.log("AuthLink", "No Auth Header")
        return {
            headers: {
                ...headers,
            },
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),

    //https://www.apollographql.com/docs/react/api/core/ApolloClient/#example-defaultoptions-object
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "network-only",
        },
    },
})

export default client
