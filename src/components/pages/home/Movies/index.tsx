import { Flex } from '@chakra-ui/react';
import { Card } from '../Card';

export interface Movies {
  id: string;
  title: string;
  rating: number;
  description: string;
  tag: string[];
}

interface MoviesProps {
  movies: Movies[];
}

const Movies: React.FC<MoviesProps> = ({ movies }) => {
  return (
    <Flex
      w="100%"
      h="100%"
      maxH="716px"
      overflowY="hidden"
      flexDir="column"
      gap="1.5rem"
    >
      {movies.map((movie) => (
        <Card
          key={movie.id}
          title={movie.title}
          rating={movie.rating}
          tag={movie.tag}
          description={movie.description}
        />
      ))}
    </Flex>
  );
};

export { Movies };
