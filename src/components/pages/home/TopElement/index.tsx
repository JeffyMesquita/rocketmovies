import { useRouter } from 'next/router';
import { BiPlus } from 'react-icons/bi';
import { Flex, Heading } from '@chakra-ui/react';

import { Button } from '@/components/Button';

const TopElement: React.FC = () => {
  const { push } = useRouter();
  return (
    <Flex w="100%" justify="space-between" mb="36px">
      <Heading
        as="h5"
        color="#FFFFFF"
        fontWeight="400"
        fontSize="32px"
        fontFamily="Roboto Slab"
      >
        Meus Filmes
      </Heading>

      <Button
        title="Adicionar filme"
        icon={<BiPlus fontSize="24px" />}
        onClick={() => push('/new')}
      />
    </Flex>
  );
};

export { TopElement };
