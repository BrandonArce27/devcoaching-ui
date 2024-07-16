import React from "react";

import { Heading as ChakraHeading } from "@chakra-ui/react";

import { HeadingProps } from "@/shared/types/heading.type";

const Heading: React.FC<HeadingProps> = (props) => <ChakraHeading {...props} />;

export default Heading;
