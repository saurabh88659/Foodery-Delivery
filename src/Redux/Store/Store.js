import {createStore} from 'redux';
import rootReducer from '../rootReducer';

/**
 * @author Dablu Kumar
 * @since 16-10-2023
 * @description app redux store
 */

const store = createStore(rootReducer);

export default store;
