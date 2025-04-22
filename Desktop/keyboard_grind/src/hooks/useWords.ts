import { faker } from '@faker-js/faker';
import { useCallback, useState } from "react";

const generateWords = (count: number) => {
    return faker.word.words(count).toLowerCase();
}

const useWords = () => {
    const [ words, setWords] = useState<String>(generateWords(count));
};

export default useWords;