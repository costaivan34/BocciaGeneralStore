import logo from '../../src/assets/logo.png';
import {ItemCount} from './ItemCount.js'

export const  ItemListContainer = ({greeting}) => {
  return (
    <div className="ItemListContainer">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
        {greeting}
        </h1>
        <ItemCount stock={5} initial={1} />
      </header>
    </div>
  );
}

