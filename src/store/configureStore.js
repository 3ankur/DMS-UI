import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/mainReducer';
import thunk from 'redux-thunk';

export default function configureStore(info) {
  	return createStore(
		rootReducer,
		{login:info},
    	applyMiddleware(thunk)
  	);
}