import { create } from 'zustand';

interface State {
  speed: number;
  type: 'forward' | 'backward';
  score: number;
  count: number;
  wrong: boolean;
  correct: boolean;
  warning: boolean;
  finished: boolean;
  flow: boolean;
  setSpeed: (data: number) => void;
  setType: (data: 'forward' | 'backward') => void;
  setScore: (data: number) => void;
  setCount: (data: number) => void;
  setWrong: (data: boolean) => void;
  setCorrect: (data: boolean) => void;
  setWarning: (data: boolean) => void;
  setFinished: (data: boolean) => void;
  setFlow: (data: boolean) => void;

}

const useStore = create<State>((set) => ({
  speed: 750,
  type: 'forward',
  score: 0,
  count: 2,
  wrong: false,
  correct: false,
  warning: false,
  finished: false,
  flow: false,
  setSpeed: (data: number) => set(() => ({ speed: data })),
  setType: (data: 'forward' | 'backward') => set(() => ({ type: data })),
  setScore: (data: number) => set(() => ({ score: data })),
  setCount: (data: number) => set(() => ({ count: data })),
  setWrong: (data: boolean) => set(() => ({ wrong: data })),
  setCorrect: (data: boolean) => set(() => ({ correct: data })),
  setWarning: (data: boolean) => set(() => ({ warning: data })),
  setFinished: (data: boolean) => set(() => ({ finished: data })),
  setFlow: (data: boolean) => set(() => ({ flow: data })),
}));

export default useStore;
