import "./styles/App.css";
import { Cart } from "./components/cart/Cart.js";
import { CartProvider } from "./context/CartContext.js";
import { NavBar } from "./components/navbar/Navbar.js";
import { Footer } from "./components/footer/Footer.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ItemListContainer } from "./components/item/ItemListContainer.js";
import { ItemDetailContainer } from "./components/item/ItemDetailContainer.js";
import { OrdersDetailContainer } from "./components/orders/OrdersDetailContainer.js";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ItemListContainer}></Route>
          <Route
            exact
            path="/category/:id"
            component={ItemListContainer}
          ></Route>
          <Route exact path="/item/:id" component={ItemDetailContainer}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route
            exact
            path="/checkout/newOrder"
            component={OrdersDetailContainer}
          ></Route>
        </Switch>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
