import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner.js';

function App() {
  return (
    <div className="App">
      <h1>Olá Mundo!</h1>
      <Banner/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem vindo ao react.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
