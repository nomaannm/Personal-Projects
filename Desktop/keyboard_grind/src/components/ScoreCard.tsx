import { motion } from "motion/react";
import {formatPercentage} from "../utility-functions/helpers.ts";

const ScoreCard = ({
    errors, accuracyPercentage, total, className }: {errors: number, accuracyPercentage: number, total: number, className?: string}) => {

    const initial = { opacity: 0 };
    const animate = { opacity: 1 };
    const duration = { duration: 0.3 };


    return(
        <ul className={`flex flex-col items-center txt-primary-400, space-y-3 ${className}`}>
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
        </ul>
    );
}

export default ScoreCard;