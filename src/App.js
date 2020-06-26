import React from 'react';

import Navbar from './components/Navbar';

import './App.module.scss';
import Countries from './components/Countries';
import World from './components/World';
import Footer from './components/Footer';
import Country from './components/Country';


function App() {

    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <World/>
                <div className="container">
                    <Countries/>
                    <div style={{ height: '100px' }} />
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default App;
