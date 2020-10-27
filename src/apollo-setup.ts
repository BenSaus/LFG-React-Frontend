import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
// import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
    uri: "http://localhost:1337/graphql",
})

// const authLink = setContext((_, { headers }) => {
//     // WARNING: TODO: This is not safe and should only be done for testing
//     const token = localStorage.getItem("token")

//     return {
//         headers: {
//             ...headers,
//             Authorization: token ? `Bearer ${token}` : "",
//         },
//     }
// })

const client = new ApolloClient({
    // link: authLink.concat(httpLink),
    link: httpLink,
    cache: new InMemoryCache(),

    //https://www.apollographql.com/docs/react/api/core/ApolloClient/#example-defaultoptions-object
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "network-only",
        },
    },
})

export default client
