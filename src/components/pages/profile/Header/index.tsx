import { BackButton } from "@/components/BackButton";
import { Flex, Image } from "@chakra-ui/react";
import { BsCamera } from "react-icons/bs";

const Header: React.FC = () => {

  return (
    <Flex
      w="100%"
      h="144px"
      position="relative"
      bg="#FF859B0D"
      alignItems="center"
    >
      <Flex mx="144px" justify="space-between" w="100%">
        <BackButton />

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
