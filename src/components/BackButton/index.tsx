import { Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";

const BackButton:React.FC = () => {
  const { back } = useRouter();
  return (
    <Flex
      alignItems="center"
      gap="0.5rem"
      onClick={() => back()}
      _hover={{
        cursor: 'pointer',
      }}
    >
      <BsArrowLeft color="#FF859B" />
      <Heading
        as="h2"
        fontSize="16px"
        fontWeight="400"
        fontFamily="Roboto Slab"
        color="#FF859B"
      >
        Voltar
      </Heading>
    </Flex>
  );
}

export { BackButton}