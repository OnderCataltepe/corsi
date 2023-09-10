import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  text: string;
}

const Button = ({ onClick, text, ...rest }: ButtonProps): JSX.Element => {
  return (
    <button
      text="xl white center"
      p="y-1 x-1"
      min-w="sm:100px 60px"
      transition="bg 300"
      cursor="pointer"
      font="500"
      onClick={onClick}
      {...rest}>
      {text}
    </button>
  );
};

export default Button;
