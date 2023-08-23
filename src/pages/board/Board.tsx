import Cube from '~/components/Cube/';
import { generateLocation, generatePosition } from '~/utils';

const Board = (): JSX.Element => {
  const board = new Array(16).fill(null).map((_, i) => i);
  const arr = generateLocation(16);

  return (
    <div className="grid grid-cols-4">
      {board.map((_, index: number) => {
        const margin = generatePosition();

        return (
          <div key={index} w="md:150px 75px" h="md:150px 75px" bg="sky-200" flex={margin}>
            {arr.includes(index) && <Cube />}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
