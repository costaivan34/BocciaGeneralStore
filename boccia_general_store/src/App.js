import "./App.css";
import { NavBar } from "./components/NavBar/NavBar.js";
import { ItemListContainer } from "./components/Item/ItemListContainer.js";
import { ItemDetailContainer } from "./components/Item/ItemDetailContainer.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer  />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
