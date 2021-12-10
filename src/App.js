import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter/index';
import { Navbar } from './components/Navbar';

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
         
        </a>
       
        <Counter />
        <Navbar />
        
      </header>
    </div>
  );
}

export default App;
