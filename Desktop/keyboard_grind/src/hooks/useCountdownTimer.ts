import { useEffect, useCallback, useState, useRef } from "react";

const useCountdownTimer = (seconds: number) => {
    const [timeLeft, setTimeLeft] = useState<number>(seconds);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startCountDown = useCallback(() => {
        console.log("Starting countdown..");
        intervalRef.current = setInterval(() =>{
            setTimeLeft((timeLeft: number) => timeLeft - 1);
        }, 1000);

    }, [setTimeLeft]);

    const resetCountDown = useCallback(() => {
        console.log("resetting countdown..");
        if(intervalRef.current){
            clearInterval(intervalRef.current);
        }
        setTimeLeft(seconds);

    }, [seconds]);

    useEffect(() => {
        if(!timeLeft && intervalRef.current) {
            console.log("clearing timer...");

            clearInterval(intervalRef.current);

        }
    }, [timeLeft, intervalRef]);

    return { timeLeft, startCountDown, resetCountDown };
};

export default useCountdownTimer;