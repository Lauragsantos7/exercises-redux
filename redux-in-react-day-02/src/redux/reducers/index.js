// ./src/reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({ counterReducer });

export default rootReducer;

// combineReducers: o estado global se torna um objeto em que as suas chaves são os reducers:
// state = {
//     reducer1: { ... },
//     reducer2: { ... },
//     reducer3: { ... },
//   }
