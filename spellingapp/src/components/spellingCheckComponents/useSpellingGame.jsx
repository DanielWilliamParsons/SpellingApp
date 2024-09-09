/**
 * Controls the flow of the spelling game
 * - Tracks the current word from an array of words
 * - Tracks the current letter each in word
 * - Puts a reference on each input to track highlighting the form
 * - Tracks and updates the input made by the user
 * - Resets the userInput when the user moves on to the next word
 */

import { useState, useEffect, useRef } from 'react';

const useSpellingGame = (words, hasGameStarted, endGame) => {

    // The words input is an array of words
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    
    // Keeps track of the alphabet inputs that the user has added; used to visually set and reset the inputs on the user's screen.
    const [userInputs, setUserInputs] = useState(
        Array(words[0].word.length).fill('')
    );

    // Keeps track of whether the user's input is correct or incorrect
    // This is used to visually update the input highlights
    const [userCorrect, setUserCorrect] = useState(
        Array(words[0].word.length).fill('incomplete')
    );
    console.log(words[0].word.length);
    console.log(userCorrect);

    const inputRefs = useRef([]); // An array of refs for each input on the form

    // Focus the first input when the game loads
    useEffect(() => {
        if (hasGameStarted && inputRefs.current[0]) {
            inputRefs.current[0].focus();
        } else if(hasGameStarted && inputRefs.current[currentWordIndex]) {
            inputRefs.current[currentWordIndex].focus();
        }
    }, [currentWordIndex, hasGameStarted, inputRefs]); // This will run when the game loads or when the word changes.

    const handleLetterInput = (e, letter, index) => {
        console.log(e.target.value);
        console.log(index);

        // Update the empty inputs
        const updatedInputs = [...userInputs];
        updatedInputs[index] = e.target.value;
        setUserInputs(updatedInputs);

        // Check the letter that the user input
        if (e.target.value === letter) {
            
            // Update the array indicating whether the answer was correct or incorrect
            const updatedUserCorrect = [...userCorrect];
            updatedUserCorrect[index] = 'correct';
            setUserCorrect(updatedUserCorrect);

            // On the last letter we should prepare to move to the next word,
            if (index === words[currentWordIndex].word.length - 1) {
                
                // Check if the next word exists - if not we must handle the game over.
                if(words[currentWordIndex + 1]){
                    setTimeout(() => {
                        moveToNextWord(); // Moves to the next word in half a second.
                    }, 500);
                } else {
                    // If the next word does not exist, we need to handle game over.
                    // Give 0.5 seconds pause
                    setTimeout(() => {
                        inputRefs.current[0].focus();
                        setCurrentWordIndex(0);
                        resetUserInputs(0);
                        endGame();
                    }, 500);
                    
                }

            } else {
                // The letter is correct and we are not at the end of the word
                console.log("Hooray!");
                inputRefs.current[index + 1].focus(); // Put the focus onto the next input
            }

        } else {
            // The letter was incorrect.
            console.log("Not correct!");
            const updatedUserCorrect = [...userCorrect];
            updatedUserCorrect[index] = 'incorrect';
            setUserCorrect(updatedUserCorrect);
        }
        
    }

    const moveToNextWord = () => {
        setCurrentWordIndex(currentWordIndex + 1);
        resetUserInputs(currentWordIndex + 1);
        
    };

    const resetUserInputs = (anIndex) => {
        const userInputsReset = Array(words[anIndex].word.length).fill();
        setUserInputs(userInputsReset);
        const updatedUserCorrect = Array(words[anIndex].word.length).fill('incomplete');
        setUserCorrect(updatedUserCorrect);
    }

    return {
        currentWordIndex,
        userInputs,
        userCorrect,
        inputRefs,
        handleLetterInput,
    };
}

export default useSpellingGame;