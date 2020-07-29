import { combineReducers } from 'redux';
import habitsReducer from './habitsReducer';
import completedHabitsReducer from './completedHabitsReducer';

export default combineReducers({
    habitsReducer: habitsReducer,
    completedHabitsReducer: completedHabitsReducer
})