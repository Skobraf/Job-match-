import { createStore, compose } from "redux";
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from'react-router-redux';
import rootReducer from '../reducers/index';
import diplome from '../data/getDiplome';
import filier from '../data/listMetier';
import secteur from '../data/listSecteur';

const defaultState = {
diplome,
filier,
secteur,
items: {}
}

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);
export default store;
