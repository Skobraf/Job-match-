import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import diplome from './diplome';
import filier from './filier';
import secteur from './secteur';
import items from './items';

const rootReducer = combineReducers({diplome, filier, secteur, items, routing: routerReducer });

export default rootReducer;