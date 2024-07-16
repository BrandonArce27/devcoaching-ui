import React from "react";

import { Flex, Box } from "@chakra-ui/react"; //TODO: Simplify all this in atomic design

import { useRouter } from "next/router";

import { destroyCookie } from "nookies";

import useNavigation from "@/shared/hooks/use-navigation.hook";

import { GlobalRoute, AppScreen } from "@/shared/constants/routes.constants";

import Heading from "@/shared/components/atoms/heading/Heading";

import Button from "@/shared/components/atoms/button/Button";

export function Navbar() {
  const { push } = useNavigation();

  const router = useRouter();

  const logout = () => {
    destroyCookie(null, "authToken");
    router.push("/auth/login");
  };

  return (
    <>
      <Flex
        as="nav"
        bg=""
        color="white"
        p={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading as="h1" size="lg" fontFamily="Arial, sans-serif" mr={5}>
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
        <Button
          onClick={() =>
            push({ route: GlobalRoute.APP, screen: AppScreen.ROOT })
          }
          colorScheme="teal"
          variant="outline"
          hover={{ bg: "#2C7A7B", color: "black" }}
          text="home.navbar.profile"
        />
        <Button
          onClick={() =>
            push({ route: GlobalRoute.APP, screen: AppScreen.REWARD })
          }
          colorScheme="teal"
          variant="outline"
          hover={{ bg: "#2C7A7B", color: "black" }}
          text="home.navbar.reward"
        />
        <Button
          onClick={() =>
            push({ route: GlobalRoute.APP, screen: AppScreen.PROFILE })
          }
          colorScheme="teal"
          variant="outline"
          hover={{ bg: "#2C7A7B", color: "black" }}
          text="home.navbar.profile"
        />
        <Button
          onClick={logout}
          colorScheme="red"
          variant="outline"
          text="home.navbar.logout"
        />
      </Flex>
    </>
  );
}
