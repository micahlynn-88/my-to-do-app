import React, {useState} from 'react';
import './App.css';
import TaskInput from './TaskInput';

function App(){
  const [tasks, setTasks] = useState([])
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !==indexToDelete));
  }

  return (
  <div className='App'>
    <h1>My Task Manager</h1>
    <TaskInput handleAddTask={addTask}/>
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button className='dbutton' onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
  );
};
export default App;
