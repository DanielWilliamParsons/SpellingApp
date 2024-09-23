import React, {  } from 'react';

const Scorer = ({ score }) => {

    return (
        <div>
            <div className="score-report">
                <p>Current Score: {score}</p>
            </div>
        </div>
    );
}

export default Scorer;