import { motion } from 'framer-motion';
import {formatPercentage} from "../utility-functions/helpers.ts";
import { State } from "../hooks/useEngine.ts";

const ScoreCard = ({
    state, errors, accuracyPercentage, total, className }: {state: State, errors: number, accuracyPercentage: number, total: number, className?: string}) => {

    const initial = { opacity: 0 };
    const animate = { opacity: 1 };
    const duration = { duration: 0.3 };

    if(state !== 'finished'){
        return null;
    }




    return(
        <motion.ul className={`flex flex-col font-semibold font-serif items-center text-orange-200 space-y-3 ${className}`}>
            <motion.li initial={initial}
                       animate={animate}
                       transition={{...duration, delay: 0.5}}
                       className={'text-xl font-semibold'}>RESULTS !!!</motion.li>
            <motion.li initial={initial}
                       animate={animate}
                       transition={{...duration, delay: 1}}>Accuracy: {formatPercentage(accuracyPercentage)}</motion.li>
            <motion.li initial={initial}
                       animate={animate}
                       transition={{...duration, delay: 1.5}}
                       className={'text-red-500 '}>Errors: {errors}</motion.li>
            <motion.li initial={initial}
                       animate={animate}
                       transition={{...duration, delay: 1.9}}>Typed: {total}</motion.li>
        </motion.ul>
    );
}

export default ScoreCard;