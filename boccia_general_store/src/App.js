import logo from './logo.png';
import './App.css';
import NavBar from'./components/NavBar.js'

function App() {
  return (
    <div className="App">
       <NavBar />
      <header className="App-header">
     
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to Boccia General Store!<br></br>
        </h1>
        <a
          className="App-link"
          href="https://github.com/costaivan34/BocciaGeneralStore"
          target="_blank"
          rel="noopener noreferrer"
        >
         Enter
        </a>
      </header>
    </div>
  );
}

export default App;
