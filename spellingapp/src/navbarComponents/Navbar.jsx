import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const [dropdownVisible, setDropdownVisible] = useState(false); // the dropdown menu is not visible initially

    const dropdownRef = useRef(null);

    const toggleDropdown = (event) => {
        console.log(event);
        setDropdownVisible(!dropdownVisible);
    }

    const handleClickOffDropdownMenu = (event) => {
        if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOffDropdownMenu);
        return () => {
            document.removeEventListener('mousedown', handleClickOffDropdownMenu);
        };
    }, []);


    return (
        <nav>
            <div>
                <Link to='/'>Logo</Link>
            </div>

            <div>
                <div className="nav-links">
                    <Link className="nav-link" to='/'>Home</Link>
                    <div className="dropdown" ref={dropdownRef}>
                        <button className="dropdown-button" onClick={toggleDropdown}>Games</button>
                        {dropdownVisible && (
                            <div className="dropdown-menu">
                                <div className="dropdown-link">
                                    <p className='nav-link'>Link</p>
                                </div>
                                <div className="dropdown-link">
                                    <p className='nav-link'>Link again</p>
                                </div>
                                <div className="dropdown-link">
                                    <p className='nav-link'>Another link</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;