import React, { useState, useEffect, useRef } from 'react';
import HorizontalListContainer from './spellingCheckComponents/HorizontalListContainer';
import LetterInput from './spellingCheckComponents/LetterInput';
import LevelSelector from './spellingCheckComponents/LevelSelector';
import Scorer from './spellingCheckComponents/Scorer';
import Timer from './spellingCheckComponents/Timer';
import wordsData from './spellingCheckComponents/sampleWords'

const SpellingCheck = () => {

    /**
     * Game status, quiz words and level
     */
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [quizWords, setQuizWords] = useState([]);
    const [currentLevel, setCurrentLevel] = useState("level1");

    const handleStartGame = () => {
        setGameStarted(true);
        setQuizWords(createQuizWords(currentLevel));
        
    }
    console.log(quizWords);

    const createQuizWords = (level) => {
        return wordsData.map(word => {
            const { word: wordText, audio} = word // extract word and audio properties
            const levelData = word[level]; // access the selected level
            return { word: wordText, audio, ...levelData}; // combine into a new object
        });
    }

    return (
        <div>
            <div className = 'spelling-game-container'>
                {
                    !gameStarted ? (
                        <div className='controls-menu'>
                            <LevelSelector
                                currentLevel={currentLevel}
                                onLevelChange={setCurrentLevel} // Pass the state setter function as a prop
                            />
                            <button className="start-spelling-check" onClick={handleStartGame}>Start Spelling</button>
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