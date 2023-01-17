import { Flex } from "@chakra-ui/react";
import { Form } from "../Form";

const Body: React.FC = () => {
  return (
    <Flex w="100%" h="100%" alignItems="center" justify="center">
      <Form />
    </Flex>
  );
};

export { Body };
