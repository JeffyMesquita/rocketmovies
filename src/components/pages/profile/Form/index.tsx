import { useRouter } from "next/router";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Flex, Heading } from "@chakra-ui/react";
import { BsEnvelope, BsPerson, BsArrowLeft } from "react-icons/bs";
import { FiLock } from "react-icons/fi";

const Form: React.FC<any> = () => {
  const { push } = useRouter();
  return (
    <Flex flexDir="column" w="340px" >
      <Flex flexDir="column" w="100%" gap="1.5rem" >
        <Flex flexDir="column" w="100%" gap="0.5rem">
          <Input placeholder="Nome" type="input" icon={<BsPerson />} />
          <Input placeholder="E-Mail" type="email" icon={<BsEnvelope />} />
        </Flex>
        <Flex flexDir="column" w="100%" gap="0.5rem">
          <Input placeholder="Senha Atual" type="password" icon={<FiLock />} />
          <Input placeholder="Nova Senha" type="password" icon={<FiLock />} />
        </Flex>
      </Flex>
      <Button title="Salvar" mt="2.5rem" />
    </Flex>
  );
};

export { Form };
