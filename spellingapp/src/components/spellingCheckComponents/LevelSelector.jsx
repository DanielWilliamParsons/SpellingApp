import React, { useState, useEffect } from 'react';

const LevelSelector = (currentLevel, onLevelChange) => {

    const handleLevelChange = (event) => {
        onLevelChange(event.target.value); // update the state in the parent component.
    }
    
    return (
        <div className='level-selector-container'>
            <select className="choose-level" name="level-selector" defaultValue={currentLevel} onChange={handleLevelChange}>
                <option value="level1">Level 1</option>
                <option value="level2">Level 2</option>
                <option value="level3">Level 3</option>
            </select>
        </div>
    );
};

export default LevelSelector;