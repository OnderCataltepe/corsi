import Cube from '~/components/Cube/';

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
          Corsi task is a psychological test that is used to measure your visual-spatial short-term
          working memory. In this test, you have to mark the blocks that change color in order on
          the screen in the same order. The block sequence starts simple, but it gets more complex
          until your performance drops. This game shows how well your brain processes and stores
          visual information. In our application, the number of blocks will always remain the same,
          but the number of blocks you need to mark will increase. This way, you can also test your
          backward memory ability.{' '}
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
          href="/board">
          Start Test
        </a>
      </div>
    </div>
  );
};

export default Home;
