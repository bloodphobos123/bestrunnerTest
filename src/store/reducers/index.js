import { combineReducers } from 'redux';
import runReducer from './RunReducer/RunReducer';
import cyclingReducer from './CyclingReducer/CyclingReducer';
import SkiingReducer from './SkiingReducer/SkiingReducer';
import walking from './WalkingReducer/WalkingReducers';

const rootReducers = combineReducers({
    run: runReducer,
    cycling: cyclingReducer,
    skiing: SkiingReducer,
    walking: walking
})

export default rootReducers;