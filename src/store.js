import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const initialstate = {};

const middleWare = [thunk];

const store = createStore(rootReducer, initialstate,
  compose(applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

export default store;
