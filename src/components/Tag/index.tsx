import { Flex, Text } from '@chakra-ui/react';

interface TagProps {
  title: string;
}

const Tag: React.FC<TagProps> = ({ title }) => {
  return (
    <Flex
      bg="#312E38"
      h="24px"
      borderRadius="8px"
      alignItems="center"
      justify="center"
      padding="5px 16px"
    >
      <Text fontFamily="Roboto" fontSize="12px" color="#E5E5E5" fontWeight="400">
        {title}
      </Text>
    </Flex>
  );
};

export { Tag };
