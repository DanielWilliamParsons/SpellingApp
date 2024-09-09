import { useState } from 'react';

const useGameControl = () => {
    const [hasGameStarted, setHasGameStarted] = useState(false);

    const startGame = () => {
        setHasGameStarted(true);
    }

    const endGame = () => {
        setHasGameStarted(false);
    }

    return {
        startGame,
        endGame,
        hasGameStarted
    }
}

export default useGameControl;