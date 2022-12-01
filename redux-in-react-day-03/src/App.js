import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    
        <p> checklist reducer :
        Instalação
[ ] npx create-react-app my-app-redux;
[ ] npm install –save redux react-redux;
[ ] npm install –save @redux-devtools/extension
Criar dentro do diretório src:
[ ] diretório redux
Criar dentro do diretório redux
[ ] diretório actions
[ ] diretório reducers
[ ] arquivo index.js
Criar dentro do diretório actions:
[ ] arquivo index.js.
Criar dentro do diretório reducers:
[ ] arquivo index.js.
Criar dentro do arquivo redux/index.js:
[ ] importar o createStore
[ ] configurar o Redux DevTools
[ ] importar o rootReducer
[ ] criar e exportar a store

          
        </p>
        <p>
        Criar dentro do arquivo redux/reducers/index.js:
[ ] estado inicial
[ ] criar função reducer com switch retornando apenas a opção default
[ ] criar rootReducer usando o combineReducers
[ ] exportar rootReducer

        </p>
        <p>No arquivo ./src/index.js:
[ ] importar a store
[ ] importar o Provider, para fornecer os estados a todos os componentes encapsulados pelo <App /></p>
        
        <p>
        No arquivo redux/actions/index.js:
[ ] criar e exportar os actionTypes
[ ] criar e export os actions creators necessários
        </p>
        <p>
          Nos reducers:
          [ ] criar os casos para cada action criada, retornando o devido estado atualizado
        </p>
N<p>
  os componentes que irão ler o estado:
  [ ] criar a função mapStateToProps
  [ ] exportar usando o connect
</p>
<p>
  Nos componentes que irão modificar o estado:
  [ ] acessar a função dispatch diretamente das props do componente
  [ ] exportar usando o connect
</p>
    </div>
  );
}

export default App;
