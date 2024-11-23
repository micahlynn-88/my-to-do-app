import React, {useState} from 'react';
import './App.css'
const TaskInput = ({handleAddTask}) => {
    const [task, setTask] = useState('');
    const addTask = () => {
        if(task.trim()){
            handleAddTask(task);
            setTask('');
        }
    };
    return(
        <div>
            <input
            type="text"
            value = {task}
            onChange = {(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
            ></input>
            <button className='addButton' onClick={addTask}>Add Task</button>
        </div>
    )
}
export default TaskInput;