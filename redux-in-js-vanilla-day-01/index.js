import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// 1. Criando o Reducer com Estado Inicial
const INITIAL_STATE = { count: 0 };

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'INCREMENT_COUNTER') {
    return { count: state.count + 1 };
  }
  return state;
};
// reducer: responsável por alterar o estado global da aplicação. Recebe dois parâmetros: state atual e action.
// se o tipo da action for increment_counter: encrementa 1 no estado.

// 2. Criando a Store já com Redux Devtools
const store = createStore(reducer, composeWithDevTools());
// store: onde se coloca tudo relacionado ao estado. O próprio estado, a função que altera o estado e as ações que se chama para alterar o estado. tem dois parâmetros: reducer e composeWithDevTools, que é a importação do redux devtools. 

// 3. Criando a Action
const action = { type: 'INCREMENT_COUNTER' };
// Toda vez que for chamar a ação, é preciso passar para o reduz a ação que foi chamada.
// a ação é um objeto, que tem a chave "type" e é o identificador da ação.

// 4. Disparando a Action
const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', () => store.dispatch(action));
// dipatch: disparar a ação.

// 5. Lendo do Estado global e refletindo na tela
store.subscribe(() => {
  const globalState = store.getState();

  const countEl = document.querySelector('h2');
  countEl.innerHTML = globalState.count;

  console.log('Estado atualizado !');
});

// instalar redux devtools na aplicação: npm i @redux-devtools/extension