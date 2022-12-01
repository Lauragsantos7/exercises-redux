// ./src/redux/index.js
import { legacy_createStore as createStore} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import counterReducer from './reducers/counterReducer';
import rootReducer from './reducers';

// const INITIAL_STATE = { count: 0 };

// const reducer = (state = INITIAL_STATE, action) => state;
// o reducer está passando ao estado global a chave count com valor 0; 
// recebe como parametros state e e action e retorna o novo estado. Foi substituido pela cons abaixo:

const store = createStore(rootReducer, composeWithDevTools());

export default store;
