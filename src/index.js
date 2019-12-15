import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, borwserHistory } from 'react-router';
import { Provider } from 'react-redux'; 
import store, { history } from './js/store/index';
import App from './js/components/App';
import Secteur from './js/components/Secteur';
import Metier from './js/components/Metier';
import Details from './js/components/Details';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" exact component={App} />
            <Route path="/secteur" component={Secteur} />
            <Route path="/secteur/:id" component={Metier}/>
            <Route path="/Details" component={Details} />
        </Router>
    </Provider>
)
render ( router, document.getElementById('root'));