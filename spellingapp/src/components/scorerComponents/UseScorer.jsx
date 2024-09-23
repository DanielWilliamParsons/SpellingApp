import { useState } from 'react';

const UseScorer = () => {
    const [score, setScore] = useState(0);

    return {
        score,
        setScore
    }

}

export default UseScorer;

/**
 * This is exported to SpellingGameContainer.
 * Then score and setScore are passed as props to the UseSpellingGame hook.
 * The UseSpellingGame hook decides when the score is updated.
 * score state is also passed into the Scorer component so that the score can be displayed.
 */