import logo from '../logo.png';

export const  ItemListContainer = ({greeting}) => {
  return (
    <div className="ItemListContainer">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          {greeting}
        </h1>
      </header>
    </div>
  );
}

