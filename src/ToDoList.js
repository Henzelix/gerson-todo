import './App.css'

function ToDoList({ tasks, setTasks }){
    const listTasks = tasks.map((task) =>
        <label style={task[1] == true ? { 'textDecoration': 'line-through'} : { 'textDecoration': 'none'}}>
            <input onClick={() => {console.log('fehefh')}} checked={task[1] == true ? true : false} type={'checkbox'}></input>
            {task[0]}
        </label>
    );

    return(
        <div className="ListOfTasks">
            {listTasks}
            <br></br>
        </div>
    );
}

export default ToDoList;