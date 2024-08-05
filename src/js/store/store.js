import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './flux';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;