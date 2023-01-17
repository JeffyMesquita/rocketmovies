import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

interface ButtonProps extends ChakraButtonProps {
  title: string;
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ title, icon, ...rest }) => {
  return (
    <ChakraButton
      borderRadius="10px"
      color="#312E38"
      bg="#FF859B"
      height="48px"
      _hover={{}}
      fontFamily="Roboto Slab"
      {...rest}
    >
      {icon && icon}
      {title}
    </ChakraButton>
  );
};

export { Button };
