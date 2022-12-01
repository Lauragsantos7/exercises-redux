import React from 'react';
import './App.css';
import { connect } from 'react-redux';
// para conectar a função mapStateProps ao nosso compomente. Podemos chamar o conect diretamente na exportação. Função da React-Redux
import { actionCreator, clickCounter } from './redux/actions';

class App extends React.Component {
  render() {
  const { countState, dispatch, clicksCount } = this.props;

  const dispatchAll = (add =1) => {
    dispatch(actionCreator(add));
    dispatch(clickCounter());
  }
  return (
    <div className="App">
     <h1>Contador </h1>
     <h2>{ countState }</h2>
     <button onClick={()=> dispatchAll()} >Incrementa 1</button>
     <button onClick={()=> dispatchAll(5)}>Incrementa 5</button>
     <h3>Número de clicks: { clicksCount }</h3>
    </div>
  );
} }

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
  clicksCount: state.counterReducer.clicks,
});
// função para ler as infos do estado global com redux. Ela recebe como parâmetro as infos do estado global e retorna os valores que estão armazenados na store. Esses valores poderão ser acessados via props no componente.
// CountState é uma prop que recebe o valor da chave count 
// o nome da função é uma "convenção" na programação.
// Chave: nome da prop e o valor que qr q ela tenha(count la em redux/index)

export default connect(mapStateToProps)(App);
