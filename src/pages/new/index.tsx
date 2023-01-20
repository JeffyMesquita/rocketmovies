import { BodyPage } from '@/components/BodyPage';
import { AddMovie } from '@/components/pages/new/AddMovie';

const New: React.FC = () => {
  return (
    <BodyPage hasHeader hasBodySection>
      <AddMovie />
    </BodyPage>
  );
};

export default New;
