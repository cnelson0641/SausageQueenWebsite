import logo from './tsq.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Real Meat and A Tasty Treat!
        </p>
        <a
          className="App-link"
          href="https://dillonamphitheater.com/events/events-calendar"
          target="_blank"
          rel="noopener noreferrer"
        >
         Dillon Amphitheater Schedule of Events
        </a>
        <p>
         Website and store coming soon!
        </p>
      </header>
    </div>
  );
}

export default App;
