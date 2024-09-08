import React from 'react';
import useSpellingGame from './useSpellingGame';
import LetterInput from './LetterInput';


// Get the words data
let words = [
    { word: 'apple' },
    { word: 'banana' },
    { word: 'cherry' }
];

const SpellingGameContainer = () => {

    const {
        currentWordIndex,
        userInputs,
        userCorrect,
        currentLetterIndex,
        inputRefs,
        handleLetterInput
    } = useSpellingGame(words);
    

    return (
        <div>
            <LetterInput
                word = { words[currentWordIndex].word }
                userInputs = { userInputs }
                userCorrect = { userCorrect }
                currentLetterIndex = { currentLetterIndex }
                inputRefs = { inputRefs }
                handleLetterInput = { handleLetterInput }
            />
        </div>
    )
};

export default SpellingGameContainer;