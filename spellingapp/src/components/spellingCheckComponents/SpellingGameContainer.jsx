import React from 'react';
import useSpellingGame from './useSpellingGame';
import useGameControl from './useGameControl';
import LetterInput from './LetterInput';
import './SpellingGameContainer.css';


// Get the words data
let words = [
    { word: 'apple' },
    { word: 'banana' },
    { word: 'cherry' }
];

const SpellingGameContainer = () => {

    const {
        startGame,
        endGame,
        hasGameStarted,
    } = useGameControl();

    const {
        currentWordIndex,
        userInputs,
        userCorrect,
        inputRefs,
        handleLetterInput
    } = useSpellingGame(words, hasGameStarted, endGame);

    return (
        <div>
            {!hasGameStarted ? (
                <div>
                    <button className = "start-button" onClick = { startGame }>Start Game</button>
                </div>
            ) : (
                
                <LetterInput
                    word = { words[currentWordIndex].word }
                    userInputs = { userInputs }
                    userCorrect = { userCorrect }
                    inputRefs = { inputRefs }
                    handleLetterInput = { handleLetterInput }
                />
            )}
            
        </div>
    )
};

export default SpellingGameContainer;