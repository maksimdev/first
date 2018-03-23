import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import services from './services';

export default combineReducers({
    routing: routerReducer,
    services
});
