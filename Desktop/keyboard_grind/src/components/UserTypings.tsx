import Caret from "./Caret.tsx";

const UserTypings = ({
    userInput,
    className,
    targetText
} : {userInput: string, className?: string, targetText: string}) => {
    const typedCharacters = userInput.split("");
    return(
        <div className={className}>
            {typedCharacters.map((char, index) => {
                return <Character key={`${char}_${index}`} actualChar={targetText[index] || ""} typedChar={char}/>

            })}
            <Caret/>
        </div>
    );
}

const Character = ({actualChar, typedChar} : {actualChar: string, typedChar: string}) => {
    const yellowColor: string = 'text-yellow-400';
    const redColor: string = 'text-red-400';
    return (actualChar === typedChar ? <span className={yellowColor}>{actualChar}</span> :
        <span className={redColor}>{actualChar}</span>);
};

export default UserTypings;