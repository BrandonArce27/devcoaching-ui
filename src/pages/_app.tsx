import "@/styles/globals.css";

import type { AppProps } from "next/app";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

export default function App({ Component, pageProps }: AppProps) {
  
  const httpLink = createHttpLink({
    uri: "http://localhost:8080/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("authToken");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const theme = extendTheme({
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}
