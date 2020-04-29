import { combineReducers } from 'redux';

import libraries from './libraries';
import login from './login';
import students from './students';

export default combineReducers({
    libraries,
    login,
    students
});