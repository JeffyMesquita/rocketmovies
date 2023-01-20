import { useMoviesContext } from '@/context/MoviesContext';
import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { title } from 'process';
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
  const { push } = useRouter();
  const { setMovies } = useMoviesContext();
  return (
    <Flex
      w="100%"
      h="100%"
      maxH="716px"
      overflowY="scroll"
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
          onClick={() => {
            setMovies({
              description: movie.description,
              id: movie.id,
              rating: movie.rating,
              tag: movie.tag,
              title: movie.title,
            });
            push('/movie');
          }}
        />
      ))}
    </Flex>
  );
};

export { Movies };
