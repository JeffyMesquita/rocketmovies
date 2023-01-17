import { Flex, Heading, Text, HeadingProps } from "@chakra-ui/react";

interface HeaderLogoProps extends HeadingProps {
  hasSubTitle?: boolean;
  fontSize?: string
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ hasSubTitle = true, fontSize = '48px',...rest }) => {
  return (
    <Flex flexDir="column">
      <Heading
        color="#FF859B"
        fontWeight="700"
        fontSize={fontSize}
        fontFamily="Roboto Slab"
        {...rest}
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
