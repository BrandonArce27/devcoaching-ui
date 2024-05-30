import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { ChakraProvider, Button } from "@chakra-ui/react";

import { useQuery, gql } from "@apollo/client";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import Layout from "../../components/molecules/layout";

const GET_USER = gql`
  query user {
    user {
      id
      uuid
      email
      firstName
      lastName
      createdAt
      updatedAt
    }
  }
`;

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

interface User {
  id: string;
  uuid: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}

export default function Home() {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_USER);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      router.push("/login");
    } else if (data) {
      setUser(data.user);
    }
  }, [data, router]);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log(data.user);

  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Layout>
          <main>
            {user && (
              <div>
                <h2>
                  Hola: {user.firstName} {user.lastName}
                </h2>
              </div>
            )}
          </main>
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  );
}
