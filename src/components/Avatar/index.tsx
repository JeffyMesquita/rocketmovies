import { Flex, Text, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface AvatarProps {
  name: string;
  urlImage: string;
}

const Avatar: React.FC<AvatarProps> = ({ name, urlImage }) => {
  const { push } = useRouter();
  return (
    <Flex w="350px" alignItems="center" gap="0.5rem">
      <Flex w="100%" flexDir="column">
        <Text
          fontSize="14px"
          fontWeight="700"
          fontFamily="Roboto Slab"
          color="#F4EDE8"
          textAlign="right"
          display="block"
        >
          {name}
        </Text>
        <Text
          fontSize="14px"
          fontWeight="400"
          fontFamily="Roboto Slab"
          color="#948F99"
          textAlign="right"
          display="block"
          onClick={() => push('/')}
          _hover={{
            cursor: 'pointer',
          }}
        >
          Sair
        </Text>
      </Flex>
      <Flex
        border="2px solid #3E3B47"
        borderRadius="full"
        onClick={() => push('/profile')}
        _hover={{
          cursor: 'pointer',
        }}
      >
        <Image
          src={urlImage}
          w="64px"
          alt="user-avatar"
          borderRadius="full"
          objectFit="cover"
        />
      </Flex>
    </Flex>
  );
};

export { Avatar };
