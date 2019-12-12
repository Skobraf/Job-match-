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


const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const history = syncHistoryWithStore(browserHistory, store);
export default store;
