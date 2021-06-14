import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeWithDevTools = typeof window !== 'undefined'
&& window.REDUX_DEVTOOLS_EXTENSION_COMPOSE
  ? window.REDUX_DEVTOOLS_EXTENSION_COMPOSE
  : (...args) => {
    if (args.length === 0) return undefined;
    if (typeof args[0] === 'object') return compose;
    return compose(...args);
  };

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
