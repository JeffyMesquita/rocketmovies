import { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

interface BodySectionProps {
  children: ReactNode;
}

const BodySection: React.FC<BodySectionProps> = ({ children }) => {
  return (
    <Flex
      w="100%"
      h="100%"
      flexDir="column"
      padding="48px 106px 58px 123px"
    >
      {children}
    </Flex>
  );
};

export { BodySection };
