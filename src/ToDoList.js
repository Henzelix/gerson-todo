import './App.css'

function ToDoList({ tasks, setTasks, showDone }){

    const modifyList = (x, y) => {
        let newList = [...tasks];
        newList[tasks.indexOf(x)] = y;
        console.log(newList);
        setTasks(newList);
    }

    const listTasks = tasks.map((task, index) =>
        showDone == true ?
        <label key={index} style={task[1] == true ? { 'textDecoration': 'line-through'} : { 'textDecoration': 'none'}}>
            <input onChange={() => {modifyList(task, [task[0], !task[1]])}} checked={task[1] == true ? true : false} type={'checkbox'}></input>
            {task[0]}
        </label> : showDone == false && task[1] == false ?
        <label key={index} style={task[1] == true ? { 'textDecoration': 'line-through'} : { 'textDecoration': 'none'}}>
            <input onChange={() => {modifyList(task, [task[0], !task[1]])}} checked={task[1] == true ? true : false} type={'checkbox'}></input>
            {task[0]}
        </label> : <></>
    );

    return(
        <div className="ListOfTasks">
            {listTasks}
        </div>
    );
}

export default ToDoList;