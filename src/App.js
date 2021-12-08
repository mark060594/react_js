import logo from './logo.svg';
import './App.css';
import NameComponent from './components/NameComponent';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NameComponent firstName='Marco' lastName= 'Fernández'/>
        <Calculator num1={2} num2={3} operator='/' />
      </header>
    </div>
  );
}

export default App;
