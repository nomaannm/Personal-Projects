import { faker } from "@faker-js/faker";
import ResetButton from "./components/ResetButton.tsx";
import ScoreCard from "./components/ScoreCard.tsx";

const words = faker.word.words(10);


const GenerateWords = ({words} : {words: string})=> {
    return(
        <div className={'text-3xl text-center text-sky-700'}>
            {words}
        </div>
    );

}

const CountdownTimer = ({timeLeft} : {timeLeft: number}) => {

    return(
        <h2 className={'font-medium text-sky-600'}>Time: {timeLeft} </h2>
    );


}
function App(){
    return(
        <div>
            <CountdownTimer timeLeft={10}/>
            <GenerateWords words={words}/>
            <ResetButton className={"mx-auto mt-10 text-slate-500"}
                        onRestart={() => null} />
            <ScoreCard errors={20} accuracyPercentage={70} total={100}/>


        </div>
    );
}

export default App;