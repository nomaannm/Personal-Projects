import { useRef } from "react";
import { MdRefresh } from "react-icons/md";


const ResetButton = (
    {
        onRestart,
        className = "",
    } : { onRestart: () => void, className?: string }
) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const handleClick = () => {
        buttonRef.current?.blur();
        onRestart();
    }

    return(
        <button ref={buttonRef}
                onClick={handleClick}
                className={`block rounded px-8 py-2 hover:bg-slate-700/50 ${className}`}>
            <MdRefresh className={'w-6 h-6'}/>
        </button>
    );

};



export default ResetButton;