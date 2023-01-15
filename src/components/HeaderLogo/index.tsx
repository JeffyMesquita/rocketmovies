import { Flex, Heading, Text } from "@chakra-ui/react";

interface HeaderLogoProps {
  hasSubTitle?: boolean;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ hasSubTitle = true }) => {
  return (
    <Flex flexDir="column">
      <Heading
        color="#FF859B"
        fontWeight="700"
        fontSize="48px"
        fontFamily="Roboto Slab"
      >
        RocketMovies
      </Heading>
      {hasSubTitle && (
        <Text
          color="#CAC4CF"
          fontWeight="400"
          fontSize="14px"
          fontFamily="Roboto Slab"
        >
          Aplicação para acompanhar tudo que assistir.
        </Text>
      )}
    </Flex>
  );
};

export { HeaderLogo };
