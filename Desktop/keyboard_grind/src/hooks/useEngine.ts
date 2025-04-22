import {useCallback, useState} from 'react';
import useWords from "./useWords.ts";
import useCountdownTimer from "./useCountdownTimer.ts";
import useTypings from "./useTypings.ts";

export type State = 'start' | 'running' | 'finished';
const NUMBER_OF_WORDS: number = 12;
const COUNTDOWN_SECONDS: number = 30;

const useEngine = () => {
    const [state, setState] = useState<State>('start');
    const { words, updateWords } = useWords(NUMBER_OF_WORDS);
    const { timeLeft, startCountDown, resetCountDown } = useCountdownTimer(COUNTDOWN_SECONDS);
    const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(state !== 'finished');
    const [errors, setErrors] = useState(0);

    const sumErrors = useCallback(()=> {
        const wordsReached = words.substring(0, cursor);
        setErrors((prevErrors): number => prevErrors + countErrors(typed, wordsReached));

    }, []);





    return {state, words, timeLeft, typed};
};

export default useEngine;