import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { Platform } from "react-native";

const host =
  Platform.OS === "ios" ? "http://localhost:4000" : "http://10.0.2.2:4000";

export const client = new ApolloClient({
  link: createHttpLink({
    uri: host,
  }),
  cache: new InMemoryCache(),
});
