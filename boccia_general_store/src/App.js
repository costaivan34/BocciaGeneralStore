import "./App.css";
import { NavBar } from "./components/NavBar/NavBar.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ItemListContainer } from "./components/Item/ItemListContainer.js";
import { ItemDetailContainer } from "./components/Item/ItemDetailContainer.js";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ItemListContainer}></Route>
        <Route exact path="/category/:id" component={ItemListContainer}></Route>
        <Route exact path="/item/:id" component={ItemDetailContainer}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
