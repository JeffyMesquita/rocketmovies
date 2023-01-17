import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsArrowLeft, BsCamera } from "react-icons/bs";

const Header: React.FC = () => {
  const { back } = useRouter();

  return (
    <Flex
      w="100%"
      h="144px"
      position="relative"
      bg="#FF859B0D"
      alignItems="center"
    >
      <Flex mx="144px" justify="space-between" w="100%">
        <Flex
          alignItems="center"
          gap="0.5rem"
          onClick={() => back()}
          _hover={{
            cursor: "pointer",
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
        <Flex position="relative" w="186px" h="186px" mt="146px">
          <Flex
            bg="#FF859B"
            w="48px"
            h="48px"
            borderRadius="50%"
            position="absolute"
            bottom="0"
            right="0"
            justifyContent="center"
            alignItems="center"
            _hover={{
              cursor: "pointer",
            }}
          >
            <BsCamera color="black" fontSize="24px"/>
          </Flex>
          <Image
            src="https://avatars.githubusercontent.com/u/20876017?v=4"
            w="100%"
            h="100%"
            borderRadius="50%"
            alt="user"
          />
        </Flex>
        <Flex display="hidden" w="60px"></Flex>
      </Flex>
    </Flex>
  );
};

export { Header };
