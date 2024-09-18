import { useState } from 'react';

const useGameControl = () => {
    const [hasGameStarted, setHasGameStarted] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);

    const startGame = () => {
        setHasGameStarted(true);
        setIsGameOver(false);
    }

    const endGame = () => {
        setHasGameStarted(false);
        setIsGameOver(true);
    }

    return {
        startGame,
        endGame,
        hasGameStarted,
        isGameOver
    }
}

export default useGameControl;