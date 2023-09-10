import Cube from '~/components/Cube/';
import { INTRODUCTION } from '~/constants';

const Home = (): JSX.Element => {
  return (
    <div p="7" w="md:1/2 full" max-w="700px" b="1 solid sky-400">
      <h1 text="center 5xl sky-400" mb="4">
        Corsi Task
      </h1>
      <div float="md:left none" m="md:r-5 r-0" flex="~ justify-center items-center">
        <Cube animated />
      </div>
      <div>
        <p text="xl gray-800" font="400">
          {INTRODUCTION}
        </p>
        <a
          decoration="none"
          display="block"
          w="full"
          m="t-4 x-auto"
          b="1 solid sky-400"
          p="1"
          transition="bg 300"
          bg="transparent hover:sky-400"
          font="500"
          cursor="pointer"
          text="xl gray-800 center"
          href="/test">
          Start Test
        </a>
      </div>
    </div>
  );
};

export default Home;
