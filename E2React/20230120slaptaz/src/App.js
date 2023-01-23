import './App.css';
import Assignment from './componenets/Assignment';
import Solution from './componenets/Solution';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Užduotis
        <Assignment />
      </header>
      <Solution />
    </div>
  );
}

export default App;
