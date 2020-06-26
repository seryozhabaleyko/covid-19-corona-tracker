import React from 'react';

import Logo from '../Logo';

import './Navbar.scss';

function Navbar() {

    return (
        <nav className="navbar">
            <div className="container d-flex align-items-center justify-content-between">
                <Logo />
                Navbar
            </div>
        </nav>
    );
}

export default Navbar;