/**
 * Created by ruluo1992 on 16-5-9.
 */
import {render} from 'react-dom';
import React from 'react';
import {createStore} from 'redux';
import todoApp from './reducers';
import {Provider} from 'react-redux';
import App from './containers/App';

let store = createStore(todoApp);

let root = document.body;


render(
    <Provider store={store}>
        <App/>
    </Provider>,
    root
);
