import React from "react";

import { FormControl, FormLabel } from "@chakra-ui/react";

import Input from "@/shared/components/atoms/input/Input";

import { FormControlWithLabelProps } from "@/shared/types/form.type";

const FormControlWithLabel: React.FC<FormControlWithLabelProps> = ({
  id,
  label,
  ...inputProps
}) => (
  <FormControl id={id} isRequired>
    <FormLabel>{label}</FormLabel>
    <Input label={label} {...inputProps} />
  </FormControl>
);

export default FormControlWithLabel;
