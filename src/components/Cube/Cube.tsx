import { PropsWithChildren, HTMLAttributes } from 'react';

type ViewProps = HTMLAttributes<HTMLDivElement>;

interface CubeProps {
  animated?: boolean;
}

const Face = ({ className, ...rest }: PropsWithChildren<ViewProps>): JSX.Element => {
  return (
    <div
      {...rest}
      b="1 solid sky-400"
      bg="sky-300"
      op="50"
      w="30px"
      h="30px"
      position="absolute"
      className={className}></div>
  );
};

const Cube = ({ animated }: CubeProps): JSX.Element => {
  return (
    <div
      w="30px"
      h="30px"
      m={animated ? '40px' : 'md:25px 5px'}
      perspective="500px"
      transform={animated ? 'scale-200' : 'md:scale-200 scale-100'}>
      <div
        position="relative"
        w="30px"
        h="30px"
        transform="preserve-3d"
        rotate="x-342deg y-10deg z-0deg"
        animate={animated && 'cubeturn count-infinite'}>
        <Face rotate="x-90deg" un-translate="y-[-15px]" />
        <Face rotate="x-270deg" un-translate="y-15px" />
        <Face rotate="y-270deg" un-translate="x-[-15px]" />
        <Face rotate="y-270deg" un-translate="x-15px" />
        <Face un-translate="z-15px" />
        <Face rotate="y-180deg" un-translate="z-[-15px]" />
      </div>
    </div>
  );
};

export default Cube;
