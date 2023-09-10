import { useState, useEffect, useRef, useMemo } from 'react';
import Board from '~/components/Board';
import useStore from '~/store/useStore';
import { checkAnswer, generateLocation } from '~/utils';
import BoardHead from '~/components/BoardHead';
import { MAX_COUNT, BOARD_LENGTH } from '~/constants';

const Test = (): JSX.Element => {
  const timeRef = useRef<ReturnType<typeof setTimeout> | undefined>();
  const [start, setStart] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-2);
  const [answer, setAnswer] = useState<number[]>([]);
  const {
    warning,
    setScore,
    setWrong,
    setCorrect,
    flow,
    setFlow,
    count,
    setFinished,
    speed,
    type
  } = useStore((state) => state);

  const locations: number[] = useMemo(() => {
    return generateLocation(BOARD_LENGTH);
  }, [count, warning]);

  useEffect(() => {
    timeRef.current = setTimeout(() => {
      if (flow && index < count - 1) {
        setIndex(index + 1);
      } else {
        setFlow(false);
        setIndex(-1);
      }
    }, speed);

    return () => clearInterval(timeRef.current);
  }, [index, flow]);

  const startHandler = (): void => {
    if (!start) {
      setFlow(true);
      setStart(true);
    } else {
      const isMatch = checkAnswer(locations.slice(0, count), answer, type);
      setAnswer([]);
      if (isMatch) {
        if (count === MAX_COUNT) {
          setScore(MAX_COUNT);
          setCorrect(true);
          setFinished(true);
        } else {
          setCorrect(true);
          setScore(count);
        }
      } else {
        if (warning) {
          setWrong(true);
          setFinished(true);
        } else {
          setWrong(true);
        }
      }
    }
  };

  return (
    <div>
      <BoardHead start={start} startHandler={startHandler} />
      <Board
        locations={locations}
        answer={answer}
        setAnswer={setAnswer}
        count={count}
        index={index}
      />
    </div>
  );
};

export default Test;
