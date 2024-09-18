import { useState, useEffect } from 'react';
import './CountDown.css';

const CountDown = ({radius, startTime, isCountingDown, endCountDown}) => {

    const [timeRemaining, setTimeRemaining] = useState(startTime);
    
    useEffect(() => {
        let intervalId;

        if (isCountingDown) {
            // Trigger the first countdown tick immediately
            setTimeRemaining(startTime - 1);

            // Subsequent countdown ticks every second
            intervalId = setInterval(() => {
                setTimeRemaining((prevTime) => {
                    if(prevTime > 0) {
                        return prevTime - 1;
                    } else {
                        clearInterval(intervalId);
                        return 0;
                    }
                });
            }, 1000);
            return () => clearInterval(intervalId);
        }
    }, [isCountingDown, startTime]);

    useEffect(() => {
        // The interval set here allows the final second to tick down in the above useEffect
        const intervalId = setInterval(() => {
            if (timeRemaining === 0) {
                endCountDown(); // Update the parent state when the countdown has finished
            }
            clearInterval(intervalId);
        }, 1000);
        
    }, [timeRemaining, endCountDown]);

    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (timeRemaining / startTime) * circumference;

    return(
        <div className="countdown-container">
            <svg className="countdown-svg" width="200" height="200" xmlns="http://w3.org/2000/svg">
                <circle
                    className = "countdown-ring"
                    cx="100"
                    cy="100"
                    r = {radius}
                    strokeWidth = "10"
                    strokeDasharray = {circumference}
                    strokeDashoffset = {strokeDashoffset}
                />
            </svg>
        </div>
    )

}

export default CountDown;