import Caret from "./Caret.tsx";
import clsx from "clsx";

const UserTypings = ({
    userInput,
    className,
    words
} : {userInput: string, className?: string, words: string}) => {
    const typedCharacters = userInput.split("");
    return(
        <div className={className}>
            {typedCharacters.map((char, index) => {
                return <Character key={`${char}_${index}`} actualChar={char} expectedChar={words[index]}/>

            })}
            <Caret/>
        </div>
    );
}

const Character = ({actualChar, expectedChar} : {actualChar: string, expectedChar: string}) => {
    const isCorrect: boolean = actualChar === expectedChar;
    const isWhiteSpace: boolean = expectedChar === " ";

    return <span className={clsx({
        "text-red-500": !isCorrect && !isWhiteSpace,
        "text-yellow-500": isCorrect && !isWhiteSpace,
        "bg-red-500/50": !isCorrect && isWhiteSpace
    })}>{expectedChar}</span>;
};

export default UserTypings;