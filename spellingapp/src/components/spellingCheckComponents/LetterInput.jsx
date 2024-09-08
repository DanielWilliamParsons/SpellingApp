import React from 'react';
import './LetterInput.css';

const LetterInput = ({ word, userInputs, currentLetterIndex, inputRefs, handleLetterInput }) => {

    
    return(
        <div>
            {
                word.split('').map((letter, index) => (
                    <input 
                        ref = { (el) => (inputRefs.current[index] = el) }
                        className = 'letter-input'
                        key = { index }
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