import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store, { history } from './js/store/index';
import App from './js/components/App/App';
import Secteur from './js/components/Secteur/Secteur';
import Metier from './js/components/Metier/Metier';
import Details from './js/components/Details/Details';

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