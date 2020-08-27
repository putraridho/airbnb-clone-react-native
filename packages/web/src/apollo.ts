import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

export const client = new ApolloClient({
  link: createHttpLink({
    uri: "http://localhost:4000",
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});
