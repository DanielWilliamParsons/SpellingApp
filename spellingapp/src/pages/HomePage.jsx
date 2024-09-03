import React from 'react';
import { Link } from 'react-router-dom';
import SpellingCheck from '../components/SpellingCheck';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className='home-page'>
            <p>Welcome</p>
            <SpellingCheck />
        </div>
    );
}

export default HomePage;