import "./styles/App.css";
import { NavBar } from "./components/navbar/Navbar.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ItemListContainer } from "./components/item/ItemListContainer.js";
import { ItemDetailContainer } from "./components/item/ItemDetailContainer.js";

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
