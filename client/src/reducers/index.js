import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import serviceReducer from './serviceReducer';

export default combineReducers({
    routing: routerReducer,
    serviceState: serviceReducer
});
