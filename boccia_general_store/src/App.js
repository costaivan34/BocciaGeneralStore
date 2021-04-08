import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Boccia General Store!
        </p>
        <a
          className="App-link"
          href="https://github.com/costaivan34/BocciaGeneralStore"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to Repo
        </a>
      </header>
    </div>
  );
}

export default App;
