import React from 'react';

import Logo from '../Logo';

import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const nav = [
    { label: 'Tracker', to: '/', exact: true },
    { label: 'Symptoms', to: '/symptoms', exact: false },
    { label: 'Prevention', to: '/prevention', exact: false },
];

function Navbar() {

    return (
        <nav className="navbar">
            <div className="container d-flex align-items-center justify-content-between">
                <Logo/>
                <ul className="nav">
                    {nav.map(({ label, to, exact }) => (
                        <li className="nav-item" key={label}>
                            <NavLink className="nav-link" to={to} exact={exact}>{label}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;