import './App.css';
import Filter from './Filter'
import ToDoList from './ToDoList';
import NewTask from './NewTask';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([["jeden", false], ["dwa", true], ["trzy", false]]);

  console.log(tasks);

  return (
    <div className="App">
      <h1>Welcome to my To Do List!</h1>
      <div className='Container'>
        <Filter/>
        <hr></hr>
        <ToDoList tasks={tasks} setTasks={setTasks}/>
        <hr></hr>
        <NewTask/>
      </div>
      <h4 style={{ 'textDecoration': 'underline'}}>Mikołaj 🅱enzel</h4>
    </div>
  );
}

export default App;