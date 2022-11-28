import './App.css';
import Counter from "./components/Counter";
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <hr />
      <br />
      <Todo />
    </div>
  );
}

export default App;
