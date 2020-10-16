import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
    //https://www.apollographql.com/docs/react/api/core/ApolloClient/#example-defaultoptions-object
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "network-only",
        },
    },
})

export default client
