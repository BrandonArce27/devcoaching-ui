import { useMutation } from "@apollo/client";

import gql from "graphql-tag";

import React from "react";

import { useRouter } from "next/router";

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

    // Store the token in local storage
    if (token) {
      localStorage.setItem("authToken", token);
      console.log("authToken", token);
      router.push("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Log in</button>
    </form>
  );
}

export default Login;
