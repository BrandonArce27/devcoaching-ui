import { ChakraProvider, Heading } from "@chakra-ui/react";

import React from "react";

import { Layout } from "@/shared/components";

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
