import { Flex, Heading } from '@chakra-ui/react';
import { Movies } from '../Movies';

interface CardProps extends Omit<Movies, 'id'> {}

const Card: React.FC<CardProps> = ({ description, rating, tag, title }) => {
  return (
    <Flex w="100%" h="220px" padding="2rem" bg="#FF859B0D" borderRadius="16px">
      <Flex w="100%" gap="1rem">
        <Flex>
          <Heading as="h6" color="#F4EDE8" fontFamily="Roboto Slab" fontSize="24px" fontWeight="700">
            {title}
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { Card };
