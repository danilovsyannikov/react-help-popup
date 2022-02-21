import {createStore} from 'redux';
import rootReducer from './rootReducer';

const configureStore = () => (
    createStore(
        rootReducer
    )
);

const stores = configureStore();

export default stores;
