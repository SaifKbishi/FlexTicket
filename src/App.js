import logo from './logo.svg';
import './App.css';

function App() {
  return (
    document.title="FlexTickets",
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Site still under creation
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy a Ticket
        </a>
      </header>
    </div>
  );
}

export default App;
