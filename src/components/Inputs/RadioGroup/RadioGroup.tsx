import useStore from '~/store/useStore';

const RadioGroup = (): JSX.Element => {
  const { type, setType } = useStore((state) => state);

  return (
    <div flex="~ col items-start" gap="5px">
      <div>
        <input
          checked={type === 'forward'}
          onChange={() => setType('forward')}
          type="radio"
          name="type"
          value="forward"
          id="forward"
          m="r-1"
        />
        <label htmlFor="forward">Forward</label>
      </div>
      <div>
        <input
          checked={type === 'backward'}
          onChange={() => setType('backward')}
          type="radio"
          name="type"
          value="backward"
          id="backward"
          m="r-1"
        />
        <label htmlFor="backward">Backward</label>
      </div>
    </div>
  );
};

export default RadioGroup;
