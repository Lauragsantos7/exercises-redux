// ./src/redux/reducers/counterReducer.js
const INITIAL_STATE = {
    count: 0,
    clicks: 0,
  };
  // acrescentando o número de clicks.
  
  function counterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'INCREMENT_COUNTER':
        return { 
          ...state, 
          count: state.count + action.payload };
        // Não entendi
        // o spread operator irá adiconar a chave count com seu valor atualizado
        case 'INCREMENT_CLICK':
      return {
        ...state,
        clicks: state.clicks + 1,
      };
      default:
        return state;
    }
  }
  
  export default counterReducer;
// action sempre retorna um objeto com a chave type, que informa qual ação deve ser feita no estado, envia a ação ao reducer

// Qdo o reducer exercutr a ação INCREMENT_COUNTER, ele irá reescrever o estado global, adicionando exatamente  o que está sendo retornado.


//take your peels