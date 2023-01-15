import { useRouter } from "next/router";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Flex, Heading } from "@chakra-ui/react";
import { BsEnvelope, BsPerson, BsArrowLeft } from "react-icons/bs";
import { FiLock } from "react-icons/fi";

const Form: React.FC<any> = () => {
  const { push } = useRouter();
  return (
    <Flex flexDir="column" w="100%" mt="3rem">
      <Heading
        as="h2"
        color="#F4EDE8"
        fontFamily="Roboto Slab"
        fontWeight="500"
        fontSize="24px"
        mr="5px"
      >
        Crie sua conta
      </Heading>
      <Flex flexDir="column" w="100%" gap="0.5rem" mt="3rem">
        <Input placeholder="Nome" type="input" icon={<BsPerson />} />
        <Input placeholder="E-Mail" type="email" icon={<BsEnvelope />} />
        <Input placeholder="Senha" type="password" icon={<FiLock />} />
      </Flex>
      <Button title="Cadastrar" mt="2.5rem" />
      <Flex
        w="100%"
        mt="2.5rem"
        justify="center"
        alignItems="center"
        gap="0.5rem"
        _hover={{
          cursor: "pointer",
        }}
        onClick={() => push("/")}
      >
        <BsArrowLeft color="#FF859B" />
        <Heading
          color="#FF859B"
          fontFamily="Roboto Slab"
          fontWeight="400"
          fontSize="16px"
          textAlign="center"
        >
          Voltar para o login
        </Heading>
      </Flex>
    </Flex>
  );
};

export { Form };
