import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";

import SignIn from "./signin";

const Home: NextPage = () => {
  return (
    <>
      <SignIn />
    </>
  );
};

export default Home;
