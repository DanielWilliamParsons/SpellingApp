import React from 'react';
import { Link } from 'react-router-dom';
import SpellingGameContainer from '../components/spellingCheckComponents/SpellingGameContainer';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className='home-page'>
            <SpellingGameContainer />
        </div>
    );
}

export default HomePage;