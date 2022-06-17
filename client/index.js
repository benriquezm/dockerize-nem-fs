import React from "react";
import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import "bootstrap/dist/css/bootstrap.css";

import App from "./src/App";

//  create client instance ApolloClient
const client = new ApolloClient({
    link: new HttpLink({
        uri: "http://localhost:3000/graphql",
        headers: {
            // PUT-HERE-ANY-HEADER-VARS-IF-EXISTS
        },
    }),
    cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById("root"));

root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
