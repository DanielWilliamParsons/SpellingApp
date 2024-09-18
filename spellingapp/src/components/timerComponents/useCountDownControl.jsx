import { useState } from 'react';

const useCountDownControl = (endGame, timeUp) => {

    const [isCountingDown, setIsCountingDown] = useState(false);

    const startCountDown = () => {
        setIsCountingDown(true);
    }

    const endCountDown = () => {
        endGame(); // Will call endGame on another component's state
        timeUp(); // Allows the game to reset
        setIsCountingDown(false);
    }

    return {
        isCountingDown,
        startCountDown,
        endCountDown,
    }

}

export default useCountDownControl;