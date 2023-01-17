import {
  Input as InputChakra,
  InputProps as InputPropsChakra,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/input';
import { ReactNode } from 'react';

interface InputProps extends InputPropsChakra {
  icon?: ReactNode;
}

const Input: React.FC<InputProps> = ({ icon, ...rest }) => {
  return (
    <InputGroup borderRadius="10px">
      {icon && (
        <InputLeftElement pointerEvents="none" color="#948F99">
          {icon}
        </InputLeftElement>
      )}

      <InputChakra
        _active={{}}
        _hover={{}}
        _focus={{}}
        border="none"
        background="#262529"
        _placeholder={{
          color: '#948F99',
        }}
        {...rest}
      />
    </InputGroup>
  );
};

export { Input };
