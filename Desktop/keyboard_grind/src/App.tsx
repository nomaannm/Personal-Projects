import { ReactNode } from 'react';
import ResetButton from "./components/ResetButton.tsx";
import ScoreCard from "./components/ScoreCard.tsx";
import UserTypings from "./components/UserTypings.tsx";
import useEngine from "./hooks/useEngine.ts";
import { ToastContainer } from "react-toastify";
import { calculateAccuracyPercentage } from "./utility-functions/helpers.ts"

const GenerateWords = ({words} : {words: string})=> {
    return(
        <div className={'text-slate-500 font-semibold font-mono'}>
            {words}
        </div>
    );
};
const CountdownTimer = ({timeLeft} : {timeLeft: number}) => {
    return(
        <h2 className={'font-medium text-amber-100'}>Time: {timeLeft} </h2>
    );
};
const WordsContainer = ({children} : {children: ReactNode}) => {
    return(
        <div className={"relative text-3xl max-w-xl leading-relaxed break-all mt-3"}>
            {children}
        </div>
    );
};


const App = () => {
    const { state, words, timeLeft, typed, restart, errors, totalTyped} = useEngine();
    return(
        <div>
            <ToastContainer/>
            <CountdownTimer timeLeft={timeLeft}/>
            <WordsContainer>
                <GenerateWords words={words}/>
                <UserTypings className={'absolute inset-0'} userInput={typed} words={words}/>
            </WordsContainer>
            <ResetButton className={"mx-auto mt-10 text-slate-500"}
                        onRestart={restart} />
            <ScoreCard state={state}
                       errors={errors}
                       accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
                       total={totalTyped}/>


        </div>
    );
}

export default App;