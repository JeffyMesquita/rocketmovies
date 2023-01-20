import {
  createContext, useContext, useState
} from 'react';

export interface Movies {
  id: string;
  title: string;
  rating: number;
  description: string;
  tag: string[];
}

export interface MoviesContextData {
  movies: Movies;
  setMovies: (movies: Movies) => void;
}

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData);
const MoviesProvider: React.FC<any> = ({ children}) => {
  const [movies, setMovies] = useState<Movies>({} as Movies);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setMovies
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = (): MoviesContextData => {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error('useMoviesContext must be used within an MoviesProvider');
  }

  return context;
};

export { MoviesProvider };
