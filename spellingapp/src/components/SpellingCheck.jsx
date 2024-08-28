import React, { useState, useEffect, useRef } from 'react';
import HorizontalListContainer from './spellingCheckComponents/HorizontalListContainer';
import LetterInput from './spellingCheckComponents/LetterInput';
import LevelSelector from './spellingCheckComponents/LevelSelector';
import Scorer from './spellingCheckComponents/Scorer';
import Timer from './spellingCheckComponents/Timer';

const SpellingCheck = () => {


    return (
        <div>
            <div className = 'spelling-game-container'>
                {
                    !gameStarted ? (
                        <div className='controls-menu'>
                            <LevelSelector />
                        </div>
                    ) : (
                        <div className = 'scorer-and-timer'>
                            <Scorer />
                            <Timer />
                        </div>
                    )
                }
                
                <div className='spelling-section'>
                    {
                        gameStarted && (
                            <div className='letters-list'>
                                <p>This section will generate a set of LetterInput components</p>
                                <LetterInput />
                            </div>
                        )
                    } {
                        gameOver && (
                            <div>
                                <p>Game over</p>
                            </div>
                        )
                    }
                </div>
                <div className='completed-words-container'>
                    <HorizontalListContainer />
                </div>

            </div>
        </div>
    );
};

export default SpellingCheck;