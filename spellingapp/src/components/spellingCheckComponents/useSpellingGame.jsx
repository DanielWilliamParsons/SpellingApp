/**
 * Controls the flow of the spelling game
 * - Tracks the current word from an array of words
 * - Tracks the current letter each in word
 * - Puts a reference on each input to track highlighting the form
 * - Tracks and updates the input made by the user
 * - Resets the userInput when the user moves on to the next word
 */

import { useState, useEffect, useRef } from 'react';

const useSpellingGame = (words = []) => {
    // The words input is an array of words
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0); // Do I need this one?
    const [wordIsComplete, setWordIsComplete] = useState(false); //
    const [userInputs, setUserInputs] = useState(
        Array(words[0].length).fill('')
    ); // Keeps track of the alphabet inputs that the user has added

    const inputRefs = useRef([]); // An array of refs for each input on the form

    // Focus the first input when the game loads
    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [currentWordIndex]); // This will run when the game loads or when the word changes.

    const handleLetterInput = (e, letter, index) => {
        console.log(e.target.value);
        console.log(index);

        // Update the empty inputs
        const updatedInputs = [...userInputs];
        updatedInputs[index] = e.target.value;
        setUserInputs(updatedInputs);

        // We are on the last letter so we should prepare to move to the next word
        if (index === words[currentWordIndex].word.length - 1) {
            moveToNextWord();
        } else {
            // Check whether the input letter is correct
            if (e.target.value === letter) {
                console.log("Hooray!");
                inputRefs.current[index + 1].focus(); // Put the focus onto the next input
            } else {
                console.log("Not correct!");
            }
        }
    }

    const moveToNextWord = () => {
        setCurrentWordIndex(currentWordIndex + 1);
        const userInputsReset = Array(words[currentWordIndex + 1].length).fill();
        setUserInputs(userInputsReset);
    }

    return {
        currentWordIndex,
        userInputs,
        currentLetterIndex,
        inputRefs,
        handleLetterInput,
    };
}

export default useSpellingGame;