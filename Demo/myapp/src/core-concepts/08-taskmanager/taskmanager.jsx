import { useState } from "react";
import TaskForm from "./taskForm";
import "./taskmanager.css"
import TaskList from "./taskList";
function TaskManager(){
    const[task,setTask]=useState([]);
    const addTask=(text)=>{
        const newtask={id:Date.now,text,complete:false}
        setTask([...task,newtask])
    }

    const toggleTask=(id)=>{
        setTask(task.map((task)=>{
            return task.id == id ?{...task,complete:!task.complete}:task
        }))
    }

    const deleteTask=(id)=>{
        const filtertasks=task.filter((task)=>{
            return task['id'] !== id
        });
        setTask(filtertasks)

    }
    return(

        <div>
            <h1>Task Manager</h1>
            <TaskForm addTask={addTask}/>
            <h3>Task: {task.length}</h3>
            <TaskList tasks={task} toggleTask={toggleTask} deleteTask={deleteTask}/>
        </div>
    );
}

export default TaskManager