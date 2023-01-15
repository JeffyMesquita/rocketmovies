import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <ChakraButton
      borderRadius="10px"
      color="#312E38"
      bg="#FF859B"
      {...rest}
      _hover={{}}
    >
      {title}
    </ChakraButton>
  );
};

export { Button };
