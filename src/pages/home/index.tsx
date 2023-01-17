import { BodyPage } from '@/components/BodyPage';
import { Movies } from '@/components/pages/home/Movies';
import { TopElement } from '@/components/pages/home/TopElement';

import { movies as moviesData } from '@/utils/movies';

const Home: React.FC = () => {
  return (
    <BodyPage hasHeader hasBodySection>
      <TopElement />
      <Movies movies={moviesData}/>
    </BodyPage>
  );
};

export default Home;
