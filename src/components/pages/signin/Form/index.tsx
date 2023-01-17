import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Flex, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BsEnvelope } from 'react-icons/bs';
import { FiLock } from 'react-icons/fi';

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
        Faça seu login
      </Heading>
      <Flex flexDir="column" w="100%" gap="0.5rem" mt="3rem">
        <Input placeholder="E-Mail" type="email" icon={<BsEnvelope />} />
        <Input placeholder="Senha" type="password" icon={<FiLock />} />
      </Flex>
      <Button title="Entrar" mt="2.5rem" onClick={() => push('/home')} />
      <Heading
        mt="2.5rem"
        color="#FF859B"
        fontFamily="Roboto Slab"
        fontWeight="400"
        fontSize="16px"
        textAlign="center"
        _hover={{
          cursor: 'pointer',
        }}
        onClick={() => push('/signup')}
      >
        Criar conta
      </Heading>
    </Flex>
  );
};

export { Form };
