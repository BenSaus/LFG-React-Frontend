import { ApolloClient, InMemoryCache } from "@apollo/client"

// TODO: Gotta be a better way to do this
let token = ""
const item = localStorage.getItem("token")
if (item != null) {
    token = item
}

const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),

    // The auth header can only be added after the token is obtained
    // headers: {
    //     Authorization: token ? `Bearer ${token}` : "",
    // },

    //https://www.apollographql.com/docs/react/api/core/ApolloClient/#example-defaultoptions-object
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "network-only",
        },
    },
})

export default client
