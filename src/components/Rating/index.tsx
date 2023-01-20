import { Flex } from '@chakra-ui/react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

interface RatingProps {
  value: number;
  gap?: string;
  size?: number;
  mt?: number;
}

const Rating: React.FC<RatingProps> = ({ value, gap = "6px", size = 12, mt = 0 }) => {
  return (
    <Flex gap={gap} alignItems="flex-end" mt={mt}>
      {value === 0 && (
        <>
          <AiOutlineStar color="#FF859B" size={size} />
          <AiOutlineStar color="#FF859B" size={size} />
          <AiOutlineStar color="#FF859B" size={size} />
          <AiOutlineStar color="#FF859B" size={size} />
          <AiOutlineStar color="#FF859B" size={size} />
        </>
      )}
      {value === 1 && (
        <>
          <AiFillStar color="#FF859B" size={size} />
          <AiOutlineStar color="#FF859B" size={size} />
          <AiOutlineStar color="#FF859B" size={size} />
          <AiOutlineStar color="#FF859B" size={size} />
          <AiOutlineStar color="#FF859B" size={size} />
        </>
      )}
      {value === 2 && (
        <>
          <AiFillStar color="#FF859B" size={size} />
          <AiFillStar color="#FF859B" size={size} />
          <AiOutlineStar color="#FF859B" size={size} />
          <AiOutlineStar color="#FF859B" size={size} />
          <AiOutlineStar color="#FF859B" size={size} />
        </>
      )}
      {value === 3 && (
        <>
          <AiFillStar color="#FF859B" size={size} />
          <AiFillStar color="#FF859B" size={size} />
          <AiFillStar color="#FF859B" size={size} />
          <AiOutlineStar color="#FF859B" size={size} />
          <AiOutlineStar color="#FF859B" size={size} />
        </>
      )}
      {value === 4 && (
        <>
          <AiFillStar color="#FF859B" size={size} />
          <AiFillStar color="#FF859B" size={size} />
          <AiFillStar color="#FF859B" size={size} />
          <AiFillStar color="#FF859B" size={size} />
          <AiOutlineStar color="#FF859B" size={size} />
        </>
      )}

      {value === 5 && (
        <>
          <AiFillStar color="#FF859B" size={size} />
          <AiFillStar color="#FF859B" size={size} />
          <AiFillStar color="#FF859B" size={size} />
          <AiFillStar color="#FF859B" size={size} />
          <AiFillStar color="#FF859B" size={size} />
        </>
      )}
    </Flex>
  );
};

export { Rating }
