import './App.css';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter start={50}/>
      <Counter min={-100} max={100} step={100}/>
      
    </div>
  );
}

export default App;
