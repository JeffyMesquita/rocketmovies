import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BodyPageProps {
  children: ReactNode;
}

const BodyPage: React.FC<BodyPageProps> = ({ children }) => {
  return (
    <Flex w="100%" h="100vh" bg="#1C1B1E">
      {children}
    </Flex>
  );
};

export { BodyPage };
