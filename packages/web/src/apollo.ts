import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

export const client = new ApolloClient({
  link: createHttpLink({
    uri: process.env.REACT_APP_SERVER_URL,
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});
