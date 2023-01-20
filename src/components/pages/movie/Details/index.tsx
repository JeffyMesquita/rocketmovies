import { useMoviesContext } from '@/context/MoviesContext';
import { Flex, Heading, Text, Image } from '@chakra-ui/react';
import { BiTime } from 'react-icons/bi';

import { BackButton } from '@/components/BackButton';
import { Rating } from '@/components/Rating';
import { Tag } from '@/components/Tag';

const Details: React.FC = () => {
  const { movies } = useMoviesContext();

  return (
    <Flex
      w="100%"
      h="100%"
      maxH="716px"
      // overflowY="scroll"
      flexDir="column"
      gap="2.5rem"
    >
      <BackButton />
      <Flex gap="20px" alignItems="center">
        <Heading
          as="h2"
          color="#F4EDE8"
          fontFamily="Roboto Slab"
          fontSize="36px"
          fontWeight="500"
        >
          {movies.title}
        </Heading>
        <Rating value={movies.rating} size={24} gap="10px" mt={2} />
      </Flex>

      <Flex gap=".5rem">
        <Flex gap=".5rem">
          <Image
            src="https://avatars.githubusercontent.com/u/20876017?v=4"
            w="24px"
            h="24px"
            borderRadius="50%"
            alt="user"
            border="2px solid #3E3B47"
          />
          <Text
            as="h3"
            color="#F4EDE8"
            fontFamily="Roboto"
            fontSize="16px"
            fontWeight="400"
          >
            Por Jeferson Mesquita
          </Text>
        </Flex>
        <Flex alignItems="center" gap=".5rem">
          <BiTime color="#FF859B" size={24} style={{
            marginTop: "-2px"
          }}/>
          <Text
            as="h3"
            color="#F4EDE8"
            fontFamily="Roboto"
            fontSize="16px"
            fontWeight="400"
          >
            23/05/22 às 08:00
          </Text>
        </Flex>
      </Flex>

      <Flex w="100%" gap=".5rem">
        {movies.tag.map((t, i) => {
          return <Tag key={i} title={t} />;
        })}
      </Flex>
    </Flex>
  );
};

export { Details };
