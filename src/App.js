import './App.css';
import Filter from './Filter'
import ToDoList from './ToDoList';
import NewTask from './NewTask';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const [showDone, setShowDone] = useState(true);

  return (
    <div className="App">
      <h1>Welcome to my To Do List!</h1>
      <div className='Container'>
        <Filter showDone={showDone} setShowDone={setShowDone} />
        <hr></hr>
        <ToDoList tasks={tasks} setTasks={setTasks} showDone={showDone}/>
        <hr></hr>
        <NewTask tasks={tasks} setTasks={setTasks}/>
      </div>
      <h4 style={{ 'textDecoration': 'underline'}}>Mikołaj 🅱enzel</h4>
    </div>
  );
}

export default App;