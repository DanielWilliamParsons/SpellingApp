import React, { useState } from 'react';
import './LetterInput.css';


const LetterInput = ({ word, userInputs, userCorrect, inputRefs, handleLetterInput }) => {

    const [focusedIndexes, setFocusedIndexes] = useState(Array(word.length).fill(false));

    const handleOnFocus = (index) => {
        console.log(index);
        const updatedFocus = [...focusedIndexes];
        updatedFocus[index] = true;
        setFocusedIndexes(updatedFocus);
    }

    const handleOnBlur = (index) => {
        const updatedFocus = [...focusedIndexes];
        updatedFocus[index] = false;
        setFocusedIndexes(updatedFocus);
    }
    
    return(
        <div>
            {
                word.split('').map((letter, index) => (
                    <input 
                        key = { index }
                        ref = { (el) => (inputRefs.current[index] = el) }
                        className = { `${'letter-input'} ${focusedIndexes[index] ? 'focused' : ''} ${userCorrect[index]} ` }
                        onFocus = { () => handleOnFocus(index) }
                        onBlur = { () => handleOnBlur(index) }
                        type = "text"
                        maxLength = "1"
                        value = { userInputs[index] || '' }
                        onChange = { event => handleLetterInput(event, letter, index) }
                    />
                ))
            }
        </div>
        
    );
};

export default LetterInput;