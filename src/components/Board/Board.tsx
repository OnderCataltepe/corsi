import { useMemo } from 'react';
import Cube from '~/components/Cube';
import Info from '~/components/Info';
import useStore from '~/store/useStore';
import { generatePosition } from '~/utils';
import { BOARD_LENGTH } from '~/constants';

interface BoardProps {
  index: number;
  count: number;
  locations: number[];
  answer: any[];
  setAnswer: React.Dispatch<React.SetStateAction<any>>;
}

const Board = ({ index, count, answer, setAnswer, locations }: BoardProps): JSX.Element => {
  const board = new Array(BOARD_LENGTH).fill(null).map((_, i) => i);
  const { warning } = useStore((state) => state);

  const margin: string[] = useMemo(() => {
    let positions = [];
    for (let i = 0; i < BOARD_LENGTH; i++) {
      const element = generatePosition();
      positions.push(element);
    }
    return positions;
  }, [count, warning]);

  return (
    <div position="relative" className="grid grid-cols-4" bg="sky-200">
      <Info />
      {board.map((_, idx: number) => {
        return (
          <div
            key={idx}
            w="md:130px 75px"
            h="md:130px 75px"
            flex={margin[idx] || '~ items-end justify-end'}>
            {locations.includes(idx) && (
              <Cube
                clickCube={() => setAnswer((prev: any) => [...prev, idx])}
                key={idx}
                active={locations[index] === idx || answer[answer.length - 1] === idx}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
