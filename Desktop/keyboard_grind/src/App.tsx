import { ReactNode } from 'react';
import { faker } from "@faker-js/faker";
import ResetButton from "./components/ResetButton.tsx";
import ScoreCard from "./components/ScoreCard.tsx";
import UserTypings from "./components/UserTypings.tsx";
import Caret from "./components/Caret.tsx";

const words = faker.word.words(10);
const GenerateWords = ({words} : {words: string})=> {
    return(
        <div className={'text-sky-700'}>
            {words}
        </div>
    );
};
const CountdownTimer = ({timeLeft} : {timeLeft: number}) => {
    return(
        <h2 className={'font-medium text-sky-600'}>Time: {timeLeft} </h2>
    );
};
const WordsContainer = ({children} : {children: ReactNode}) => {
    return(
        <div className={"relative text-3xl max-w-xl leading-relaxed break-all mt-3"}>
            {children}
        </div>
    );
};


function App(){
    return(
        <div>
            <CountdownTimer timeLeft={10}/>
            <WordsContainer>
                <Caret/>
                <GenerateWords words={words}/>
                <UserTypings className={'absolute inset-0'} userInput={"test"}/>
            </WordsContainer>
            <ResetButton className={"mx-auto mt-10 text-slate-500"}
                        onRestart={() => null} />
            <ScoreCard errors={20} accuracyPercentage={70} total={100}/>


        </div>
    );
}

export default App;