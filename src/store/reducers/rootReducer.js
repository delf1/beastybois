import {combineReducers} from 'redux';
import user from './authReducer';
import workout from './workoutReducer';

const rootReducer = combineReducers({
    user,
    workout
});

export default rootReducer;