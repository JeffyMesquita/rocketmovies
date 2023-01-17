import { BodyPage } from "@/components/BodyPage";
import { Form } from "@/components/pages/signin/Form";
import { Flex, Image } from "@chakra-ui/react";

import { Header } from "@/components/pages/profile/Header";
import { Body } from "@/components/pages/profile/Body";

const Profile: React.FC = () => {
  return (
    <BodyPage>
      <Flex flexDir="column" w="100%" h="100%">
        <Header />
        <Body />
      </Flex>
    </BodyPage>
  );
};

export default Profile;
