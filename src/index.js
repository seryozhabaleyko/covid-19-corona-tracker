import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <App/>
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root'),
);

serviceWorker.unregister();