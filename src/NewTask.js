import { useRef } from "react";

function NewTask({ tasks, setTasks }){

    const textRef = useRef(null);

    const addTask = (e) => {
        e.preventDefault();
        let value = textRef.current.value;
        let newList = [...tasks];
        newList.push([value, false]);
        setTasks(newList);
        textRef.current.value = null;
        textRef.current.focus();
    };

    return (
        <>
            <form onSubmit={addTask}>
                <input ref={textRef}></input>
                <button>Add</button>
            </form>
        </>
    );
}

export default NewTask;