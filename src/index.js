import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux'; 
import store, { history } from './js/store/index';
import App from './js/components/App';
import Secteur from './js/components/Secteur';
import Metier from './js/components/Metier';
import Details from './js/components/Details';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/secteur" exact component={Secteur} />
                <Route path="/secteur/:id" exact component={Metier}/>
                <Route path="/Details" exact component={Details} />
            </Switch>
        </Router>
    </Provider>
)
render ( router, document.getElementById('root'));