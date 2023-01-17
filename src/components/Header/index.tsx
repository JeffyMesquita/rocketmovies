import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Avatar } from '../Avatar';
import { HeaderLogo } from '../HeaderLogo';
import { Input } from '../Input';

const Header: React.FC = () => {
  const { push } = useRouter();

  return (
    <Flex w="100%" h="116px" borderBottom="2px solid #3E3B47">
      <Flex w="100%" mx="123px" gap="4rem" alignItems="center">
        <HeaderLogo
          hasSubTitle={false}
          fontSize="24px"
          onClick={() => push('/home')}
          _hover={{
            cursor: 'pointer',
          }}
        />

        <Input placeholder="Pesquisar pelo título" h="56px" />

        <Avatar
          name="Jeferson Mesquita"
          urlImage="https://avatars.githubusercontent.com/u/20876017?v=4"
        />
      </Flex>
    </Flex>
  );
};

export { Header };
