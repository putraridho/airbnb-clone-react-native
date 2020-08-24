import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import * as serviceWorker from "serviceWorker";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
