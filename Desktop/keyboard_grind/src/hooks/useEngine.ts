import { useState } from 'react';
import useWords from "./useWords.ts";
import useCountdownTimer from "./useCountdownTimer.ts";

export type State = 'start' | 'running' | 'finished';
const NUMBER_OF_WORDS: number = 12;
const COUNTDOWN_SECONDS: number = 30;

const useEngine = () => {
    const [state, setState] = useState<State>('start');
    const { words, updateWords } = useWords(NUMBER_OF_WORDS);
    const { timeLeft, startCountDown, resetCountDown } = useCountdownTimer(COUNTDOWN_SECONDS);




    return {state, words, timeLeft};
};

export default useEngine;