export type ButtonVariant =
  | "ghost"
  | "outline"
  | "solid"
  | "subtle"
  | "unstyled"
  | "link";

export interface ButtonProps {
  text: string;
  variant?: ButtonVariant;
  block?: boolean;
  disabled?: boolean;
  uppercase?: boolean;
  loading?: boolean;
  onClick?: () => unknown;
  colorScheme?: string;
  type?: "button" | "submit" | "reset";
  width?: string | number;
  mt?: any;
  hover?: any;
}
