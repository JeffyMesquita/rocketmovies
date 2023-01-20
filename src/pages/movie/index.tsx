import { BodyPage } from "@/components/BodyPage";
import { TopElement } from "@/components/pages/home/TopElement";
import { Details } from "@/components/pages/movie/Details";

interface MovieProps {
  
}

const Movie: React.FC<MovieProps> = ({}) => {
  return (
    <BodyPage hasHeader hasBodySection>
      
      <Details />
    </BodyPage>
  );
};

export default Movie;