import RangeInput from '~/components/Inputs/RangeInput';
import RadioGroup from '~/components/Inputs/RadioGroup';
import Button from '~/components/Button';
import useStore from '~/store/useStore';

interface BoardHeadProps {
  start: boolean;
  startHandler: () => void;
}

const BoardHead = ({ start, startHandler }: BoardHeadProps): JSX.Element => {
  const { correct, wrong, flow } = useStore((state) => state);

  return (
    <div m="b-4" flex="~ justify-between" gap="10px">
      <Button
        pointer-events={flow || correct || wrong ? 'none' : 'auto'}
        op={flow || correct || wrong ? '20' : '100'}
        b="1 solid sky-500 hover:sky-600"
        bg="sky-500 hover:sky-600"
        onClick={startHandler}
        text={start ? 'Done' : 'Start'}
      />
      <div flex="~ items-center" gap="sm:30px 10px" display={start ? 'none' : 'flex'}>
        <RadioGroup />
        <RangeInput />
      </div>
    </div>
  );
};

export default BoardHead;
