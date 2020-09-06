import React from "react";
import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { client } from "./apollo";
import { Routes } from "./routes";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </>
  );
}
