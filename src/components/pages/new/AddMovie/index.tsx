import { BackButton } from '@/components/BackButton';
import { Flex } from '@chakra-ui/react';

const AddMovie: React.FC = () => {
  return (
    <Flex w="100%" h="100%" maxH="716px" flexDir="column" gap="2.5rem">
      <BackButton />
    </Flex>
  );
};

export { AddMovie };
