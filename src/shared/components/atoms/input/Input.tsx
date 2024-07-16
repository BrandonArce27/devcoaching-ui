import React from "react";

import { Input as ChakraInput } from "@chakra-ui/react";

import { InputProps } from "@/shared/types/input.type";

const Input: React.FC<InputProps> = (props) => <ChakraInput {...props} />;

export default Input;
