import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './container/index.jsx';
import handle from './reducer.js';

let store = createStore(handle);
let rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);