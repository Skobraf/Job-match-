import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import diplome from './diplome';
import filier from './filier';
import secteur from './secteur';

const rootReducer = combineReducers({diplome, filier, secteur, routing: routerReducer });

export default rootReducer;