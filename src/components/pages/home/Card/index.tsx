import { Rating } from '@/components/Rating';
import { Tag } from '@/components/Tag';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { Movies } from '../Movies';

interface CardProps extends Omit<Movies, 'id'> {
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  description,
  rating,
  tag,
  title,
  onClick,
}) => {
  return (
    <Flex
      w="100%"
      h="220px"
      padding="2rem"
      bg="#FF859B0D"
      borderRadius="16px"
      onClick={onClick}
    >
      <Flex w="100%" gap="1rem" flexDir="column">
        <Flex flexDir="column" gap=".5rem">
          <Heading
            as="h6"
            color="#F4EDE8"
            fontFamily="Roboto Slab"
            fontSize="24px"
            fontWeight="700"
          >
            {title}
          </Heading>
          <Rating value={rating} />
        </Flex>
        <Flex w="100%" maxHeight="52px" overflowY="hidden" textStyle="ellipsis">
          <Text as="p" color="#999591">
            {description}
          </Text>
        </Flex>
        <Flex w="100%" gap=".5rem">
          {tag.map((t, i) => {
            return <Tag key={i} title={t} />;
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export { Card };
