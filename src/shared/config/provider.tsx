import { ApolloProvider } from "@apollo/client";

import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import { StorageService } from "@/shared/services";

import { RecoilRoot } from "recoil";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_REACT_APP_API_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = StorageService.getAuthToken();

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

export const Provider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode="dark" />
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </ChakraProvider>
    </RecoilRoot>
  );
};
