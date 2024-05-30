import { useMutation } from "@apollo/client";

import gql from "graphql-tag";

import React from "react";

import { useRouter } from "next/router";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  useColorMode,
  Heading,
} from "@chakra-ui/react";

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      access_token
      expiresAt
      user {
        id
        email
      }
    }
  }
`;

type LoginData = {
  login: {
    access_token: string;
    expiresAt: string;
    user: {
      id: string;
      email: string;
    };
  };
};

function Login() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [login, { data }] = useMutation<LoginData>(LOGIN_MUTATION);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    const response = await login({ variables: { email, password } });
    const token = response.data?.login.access_token;

    if (token) {
      localStorage.setItem("authToken", token);
      console.log("authToken", token);
      router.push("/");
    }
  };

  return (
    <>
      <Heading
        as="h1"
        size="lg"
        position="absolute"
        top={5}
        left={5}
        fontFamily="Arial, sans-serif"
      >
        <Box as="span" color="white">
          Dev
        </Box>
        <Box as="span" color="#38B2AC">
          L
        </Box>
        <Box as="span" color="white">
          ive
        </Box>
      </Heading>
      <Flex minHeight="100vh" alignItems="center" justifyContent="center">
        <Box
          as="form"
          onSubmit={handleSubmit}
          p={5}
          shadow="md"
          borderWidth={isDark ? 0 : 1}
        >
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input name="email" type="email" placeholder="Email" />
          </FormControl>
          <FormControl id="password" isRequired mt={6}>
            <FormLabel>Password</FormLabel>
            <Input name="password" type="password" placeholder="Password" />
          </FormControl>
          <Button
            colorScheme="teal"
            variant="outline"
            type="submit"
            width="full"
            mt={4}
          >
            Log in
          </Button>
        </Box>
      </Flex>
    </>
  );
}

export default Login;
