import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../Logo';

import './Navbar.scss';

const nav = [
    { label: 'World', to: '/', exact: true },
    { label: 'Countries', to: '/countries', exact: false },
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