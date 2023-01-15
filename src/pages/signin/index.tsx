import { BodyPage } from "@/components/BodyPage";
import { HeaderLogo } from "@/components/HeaderLogo";
import { Form } from "@/components/pages/signin/Form";
import { Flex, Image } from "@chakra-ui/react";

const SignIn: React.FC = () => {
  return (
    <BodyPage>
      <Flex flexDir="row" w="100%" h="100%">
        <Flex w="45%" alignItems="center" justify="center">
          <Flex w="340px" flexDir="column">
            <HeaderLogo />
            <Form />
          </Flex>
        </Flex>
        <Flex w="55%" h="100%">
          <Image
            src="/images/LoginBackground.png"
            width="100%"
            height="100%"
            alt="bg-image"
          />
        </Flex>
      </Flex>
    </BodyPage>
  );
};

export default SignIn;
