import { MoviesProvider } from '@/context/MoviesContext';
import { ChakraProvider } from '@chakra-ui/react';

const App: React.FC<any> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS>
      <MoviesProvider>
        <Component {...pageProps} />
      </MoviesProvider>
    </ChakraProvider>
  );
};

export default App;
