import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Task = () => {
  const [task,setTask] = useState("")
  const [todolist,setTodolist] = useState<String[]>([""]);

  const handleAdd = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setTask(e.target.value) 
  } 
  const showTask = () =>{
    todolist.push(task)
    console.log(todolist)
    setTask("")
  }
  return (
    <div>
      <TextField id="filled-basic" label="Task" variant="filled" value = {task} onChange={handleAdd}/>
      <div>
        <Button id="add" variant="contained" onClick={showTask} >Add</Button>
        <div>
          {todolist.slice(1,).map((todo) => {
            return <li>{todo}</li>;
          })}
        </div>

      </div>
    </div>
  );
}

export default Task;
export {};
