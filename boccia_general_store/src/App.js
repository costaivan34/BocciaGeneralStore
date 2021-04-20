
import './App.css';
import {NavBar} from'./components/NavBar/NavBar.js'
import {ItemListContainer} from'./components/ItemListContainer.js'

function App() {
  return (
    <div className="App">
       <NavBar />
        <ItemListContainer greeting="Welcome to Boccia General Store!" />
    </div>
  );
}

export default App;
