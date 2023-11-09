import {combineReducers} from 'redux';
import LocationReducer from '../Redux/Reducers/LocationReducer';
import ViewDetailsReduces from '../Redux/Reducers/ViewDetailsReduces';

const rootReducer = combineReducers({
  LocationReducer,
  ViewDetailsReduces,
});
export default rootReducer;
