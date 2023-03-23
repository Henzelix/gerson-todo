import './App.css';
import Filter from './Filter'
import ToDoList from './ToDoList';
import NewTask from './NewTask';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my To Do List!</h1>
      <div className='Container'>
        <Filter/>
        <hr></hr>
        <ToDoList/>
        <hr></hr>
        <NewTask/>
      </div>
      <h4 style={{ 'textDecoration': 'underline'}}>Mikołaj 🅱enzel</h4>
    </div>
  );
}

export default App;