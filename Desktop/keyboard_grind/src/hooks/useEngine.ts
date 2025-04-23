import { useCallback, useState, useEffect } from 'react';
import useWords from "./useWords.ts";
import useCountdownTimer from "./useCountdownTimer.ts";
import useTypings from "./useTypings.ts";
import { toast } from "react-toastify";
import { countErrors } from "../utility-functions/helpers.ts";


export type State = 'start' | 'running' | 'finished';
const NUMBER_OF_WORDS: number = 12;
const COUNTDOWN_SECONDS: number = 30;

const useEngine = () => {
    const [state, setState] = useState<State>('start');
    const { words, updateWords } = useWords(NUMBER_OF_WORDS);
    const { timeLeft, startCountDown, resetCountDown } = useCountdownTimer(COUNTDOWN_SECONDS);
    const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(state !== 'finished');
    const [errors, setErrors] = useState(0);

    const isStarting: boolean = state === 'start' && cursor > 0;
    const areWordsFinished: boolean = cursor === words.length;
    const sumErrors = useCallback(()=> {
        const wordsReached = words.substring(0, cursor);
        setErrors((prevErrors): number => prevErrors + countErrors(typed, wordsReached));

    }, [typed, words, cursor]);

    useEffect(() => {
        if(isStarting){
            setState('running');
            startCountDown();
        }
    }, [cursor, startCountDown, isStarting])

    //When the time is finished
    useEffect(() => {
        const audio = new Audio("src/assets/sound effects/timeisup.mp3");
        if(!timeLeft){
            audio.play();
            const toastID = toast.warning("⏰ Time's up!!", {
                autoClose: 3000,
                onClose: () => {
                    audio.pause();
                    audio.currentTime = 0;
                    setState("finished");
                    sumErrors();

                }
            });

        }
    }, [timeLeft, sumErrors]);


    useEffect(()=>{
        if(areWordsFinished){
            console.log("Words are finished...");
            sumErrors();
            updateWords();
            clearTyped()
        }

    }, [cursor, words, clearTyped, areWordsFinished, typed, updateWords, sumErrors]);


    const restart = useCallback(() => {
        console.log("restarting");
        resetCountDown();
        resetTotalTyped();
        setState("start");
        setErrors(0);
        updateWords();
        clearTyped();


    }, [clearTyped, resetCountDown, resetTotalTyped, updateWords]);





    return {state, words, timeLeft, typed, errors, totalTyped, restart};
};

export default useEngine;