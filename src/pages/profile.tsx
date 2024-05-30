import { ChakraProvider, Heading } from "@chakra-ui/react";

import React from "react";

import Layout from "../../components/molecules/layout";

function profile() {
  return (
    <ChakraProvider>
      <Layout>
        <>
          <Heading>User Profile</Heading>
        </>
      </Layout>
    </ChakraProvider>
  );
}

export default profile;
