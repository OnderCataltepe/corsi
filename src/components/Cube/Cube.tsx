import { PropsWithChildren, HTMLAttributes } from 'react';
import useStore from '~/store/useStore';

type ViewProps = HTMLAttributes<HTMLDivElement>;

interface CubeProps {
  animated?: boolean;
  active?: boolean;
  clickCube?: () => void;
}

const Face = ({ className, active, ...rest }: PropsWithChildren<ViewProps>): JSX.Element => {
  return (
    <div
      {...rest}
      b={active ? '1 solid amber-400' : '1 solid sky-400'}
      bg={active ? 'amber-300' : 'sky-300'}
      op="50"
      w="30px"
      h="30px"
      position="absolute"
      className={className}></div>
  );
};

const Cube = ({ animated, active, clickCube }: CubeProps): JSX.Element => {
  const { flow } = useStore((state) => state);

  return (
    <div
      pointerEvents={flow ? 'none' : 'auto'}
      onClick={clickCube}
      cursor={animated ? 'auto' : 'pointer'}
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
        <Face active={active} rotate="x-90deg" un-translate="y-[-15px]" />
        <Face active={active} rotate="x-270deg" un-translate="y-15px" />
        <Face active={active} rotate="y-270deg" un-translate="x-[-15px]" />
        <Face active={active} rotate="y-270deg" un-translate="x-15px" />
        <Face active={active} un-translate="z-15px" />
        <Face active={active} rotate="y-180deg" un-translate="z-[-15px]" />
      </div>
    </div>
  );
};

export default Cube;
