import React from "react";

import { Button as ChakraButton } from "@chakra-ui/react";

import { useTranslate } from "@/shared/hooks";

import { ButtonProps } from "@/shared/types/button.type";

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "solid",
  block = false,
  disabled = false,
  uppercase = false,
  loading = false,
  onClick,
  ...otherProps
}) => {
  const { t } = useTranslate();

  return (
    <ChakraButton
      variant={variant}
      width={block ? "full" : undefined}
      disabled={disabled}
      isLoading={loading}
      onClick={onClick}
      {...otherProps}
      style={{ textTransform: uppercase ? "uppercase" : "none" }}

    >
      {t(
        text as
          | "form.error.required"
          | "form.error.tooShort"
          | "form.error.tooLong"
          | "form.error.invalidString"
          | "form.error.invalidNumber"
          | "form.error.invalidEmail"
          | "form.error.invalidPassword"
      )}
    </ChakraButton>
  );
};

export default React.memo(Button);
