import React from 'react';

import Navbar from './components/Navbar';
import World from './components/World';
import Countries from './components/Countries';
import Footer from './components/Footer';

import './App.module.scss';

function App() {

    return (
        <>
            <header className="header">
                <Navbar/>
            </header>
            <main className="main">
                <World/>
                <div className="container">
                    <Countries/>
                    <div style={{ height: '100px' }}/>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default App;
