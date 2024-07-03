import { Button, Flex, Box, Heading } from "@chakra-ui/react";

import Link from "next/link";

import { useRouter } from "next/router";

import { destroyCookie } from "nookies";

interface NavbarProps {
  image: string;
  links: {}[];
}

export function Navbar() {
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
        <Link href="/" passHref>
          <Button
            as="a"
            colorScheme="teal"
            variant="outline"
            _hover={{ bg: "#2C7A7B", color: "black" }}
          >
            Home
          </Button>
        </Link>
        <Link href="/reward" passHref>
          <Button
            as="a"
            colorScheme="teal"
            variant="outline"
            _hover={{ bg: "#2C7A7B", color: "black" }}
          >
            Rewards
          </Button>
        </Link>
        <Link href="/profile" passHref>
          <Button
            as="a"
            colorScheme="teal"
            variant="outline"
            _hover={{ bg: "#2C7A7B", color: "black" }}
          >
            Profile
          </Button>
        </Link>
        <Button onClick={logout} colorScheme="red" variant="outline">
          Logout
        </Button>
      </Flex>
    </>
  );
}
