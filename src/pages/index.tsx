import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Profile from "./profile";

import SignIn from "./signin";

const Home: NextPage = () => {
  return (
    <>
      <Profile />
    </>
  );
};

export default Home;
