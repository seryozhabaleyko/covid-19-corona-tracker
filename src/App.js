import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Tracker from './pages/Tracker';
import Symptoms from './pages/Symptoms';
import Prevention from './pages/Prevention';

import './App.module.scss';

function App() {

    return (
        <Router>
            <header className="header">
                <Navbar/>
            </header>
            <main className="main">
                <Switch>
                    <Route path="/" exact>
                        <Tracker/>
                    </Route>
                    <Route path="/symptoms">
                        <Symptoms/>
                    </Route>
                    <Route path="/prevention">
                        <Prevention/>
                    </Route>
                </Switch>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
