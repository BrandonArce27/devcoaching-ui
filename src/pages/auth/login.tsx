import React from "react";

import { Box, Flex, useColorMode } from "@chakra-ui/react"; //TODO: Simplify all this in atomic design

import Heading from "@/shared/components/atoms/heading/Heading";

import Button from "@/shared/components/atoms/button/Button";

import FormControlWithLabel from "@/shared/components/molecules/form/FormControlWithLabel";

import { useMutation } from "@apollo/client";

import gql from "graphql-tag";

import useNavigation from "@/shared/hooks/use-navigation.hook";

import { GlobalRoute, AppScreen } from "@/shared/constants/routes.constants";

import { useTranslate } from "@/shared/hooks";

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
  const { t } = useTranslate();

  const isDark = colorMode === "dark";

  const [login] = useMutation<LoginData>(LOGIN_MUTATION);

  const navigation = useNavigation();

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
      navigation.push({
        route: GlobalRoute.APP,
        screen: AppScreen.ROOT,
      });
    }
  };

  //TODO: Use Formik the proper way
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
        <span style={{ color: "white" }}>Dev</span>
        <span style={{ color: "#38B2AC" }}>L</span>
        <span style={{ color: "white" }}>ive</span>
      </Heading>
      <Flex minHeight="100vh" alignItems="center" justifyContent="center">
        <Box
          as="form"
          onSubmit={handleSubmit}
          p={5}
          shadow="md"
          borderWidth={isDark ? 0 : 1}
        >
          <FormControlWithLabel
            id="email"
            label={t("login.form.email")}
            name="email"
            type="email"
            placeholder={t("login.form.email")}
          />
          <FormControlWithLabel
            id="password"
            label={t("login.form.password")}
            name="password"
            type="password"
            placeholder={t("login.form.password")}
            mt={6}
          />
          <Button
            colorScheme="teal"
            variant="outline"
            type="submit"
            width="full"
            mt={4}
            text="login.form.submit"
          />
        </Box>
      </Flex>
    </>
  );
}

export default Login;
