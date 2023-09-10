import { useNavigate } from 'react-router-dom';
import homeIcon from '~/assets/icons/home.svg';
import Button from '~/components/Button';

import useStore from '~/store/useStore';

const Info = (): JSX.Element | null => {
  const {
    correct,
    wrong,
    setCorrect,
    setWrong,
    finished,
    score,
    setFlow,
    setCount,
    count,
    setWarning
  } = useStore((state) => state);
  const navigate = useNavigate();

  const continueHandler = (): void => {
    if (correct) {
      setCount(count + 1);
      setFlow(true);
      setCorrect(false);
    }
    if (wrong) {
      setWrong(false);
      setWarning(true);
      setFlow(true);
    }
  };

  if (!correct && !wrong) {
    return null;
  }

  return (
    <div
      z="10"
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg={correct ? 'green-400 op-70' : 'op-70 red-400'}
      flex="~ col items-center justify-center">
      {finished ? (
        <>
          <p flex="~ items-center" gap="10px" text="center 2rem white">
            Your span score is <span text=" 4rem">{score}</span>
          </p>
          <div flex="~" gap="20px">
            <a
              href="/"
              flex="~ items-center justify-center"
              gap="5px"
              decoration="none"
              w="100px"
              transition="bg 300"
              bg="hover:white sky-100"
              text="sky-500 xl"
              b="1 solid sky-500"
              p="y-1">
              <img alt="home icon" w="20px" src={homeIcon} />
              <p font="500">Home</p>
            </a>
            <Button
              b="1 solid sky-500 hover:sky-600"
              bg="sky-500 hover:sky-600"
              text="Restart"
              onClick={() => navigate(0)}
            />
          </div>
        </>
      ) : (
        <>
          <p text="center 4rem white">
            {correct && 'Correct'}
            {wrong && 'Wrong'}
          </p>
          <Button
            b="1 solid sky-500 hover:sky-600"
            bg="sky-500 hover:sky-600"
            text="Continue"
            onClick={continueHandler}
          />
        </>
      )}
    </div>
  );
};

export default Info;
