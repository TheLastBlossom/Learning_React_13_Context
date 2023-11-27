import './App.css';
import { AppMainRouter } from './routes/AppMainRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Context</h1>
        <AppMainRouter></AppMainRouter>
      </header>
    </div>
  );
}

export default App;
