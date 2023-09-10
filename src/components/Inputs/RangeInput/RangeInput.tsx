import useStore from '~/store/useStore';
import { MIN_SPEED, MAX_SPEED, STEP_SPEED } from '~/constants';

const RangeInput = (): JSX.Element => {
  const { speed, setSpeed } = useStore((state) => state);

  return (
    <div flex="~ col items-start" gap="5px">
      <label text="gray-800" htmlFor="speed">
        Speed:{' '}
        <span text="gray-700" font="600">
          {speed}ms
        </span>
      </label>
      <input
        value={speed}
        onChange={(e) => setSpeed(Number(e.target.value))}
        type="range"
        id="speed"
        name="volume"
        min={MIN_SPEED}
        max={MAX_SPEED}
        step={STEP_SPEED}
      />
    </div>
  );
};

export default RangeInput;
