import React from 'react';
import useSpellingGame from './useSpellingGame';
import useGameControl from './useGameControl';
import LetterInput from './LetterInput';
import './SpellingGameContainer.css';
import CountDown from '../timerComponents/CountDown';
import useCountDownControl from '../timerComponents/useCountDownControl';


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
        isGameOver
    } = useGameControl();

    const {
        currentWordIndex,
        userInputs,
        userCorrect,
        inputRefs,
        handleLetterInput,
        timeUp
    } = useSpellingGame(words, hasGameStarted, endGame);

    const {
        isCountingDown,
        startCountDown,
        endCountDown
    } = useCountDownControl(endGame, timeUp)

    return (
        <div>
            {!hasGameStarted ? (
                <div>
                    <button className = "start-button" onClick = { () => { startGame(); startCountDown();} }>Start Game</button>
                </div>
            ) : (
                <div>
                    <LetterInput
                        word = { words[currentWordIndex].word }
                        userInputs = { userInputs }
                        userCorrect = { userCorrect }
                        inputRefs = { inputRefs }
                        handleLetterInput = { handleLetterInput }
                    />
                    <CountDown
                        radius = { 70 }
                        startTime = { 10 }
                        isCountingDown = { isCountingDown }
                        endCountDown = { endCountDown }
                    />
                </div>
            )}
            {isGameOver ? (
                <div>
                    <p>Game over!</p>
                </div>
            ) : (
                <div>
                    
                </div>
            )}
            
        </div>
    )
};

export default SpellingGameContainer;