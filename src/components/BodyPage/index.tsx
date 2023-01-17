import { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

import { BodySection } from '../BodySection';
import { Header } from '../Header';

interface BodyPageProps {
  hasHeader?: boolean;
  hasBodySection?: boolean;
  children: ReactNode;
}

const BodyPage: React.FC<BodyPageProps> = ({
  hasHeader = false,
  hasBodySection = false,
  children,
}) => {
  return (
    <Flex w="100%" h="100vh" bg="#1C1B1E" flexDir="column">
      {hasHeader && <Header />}
      {hasBodySection ? <BodySection>{children}</BodySection> : children}
    </Flex>
  );
};

export { BodyPage };
