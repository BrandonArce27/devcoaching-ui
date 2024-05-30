import { ChakraProvider, Heading } from "@chakra-ui/react";

import React from "react";

import Layout from "../../components/molecules/layout";

function reward() {
  return (
    <ChakraProvider>
      <Layout>
        <>
          <Heading>Rewards</Heading>
        </>
      </Layout>
    </ChakraProvider>
  );
}

export default reward;
