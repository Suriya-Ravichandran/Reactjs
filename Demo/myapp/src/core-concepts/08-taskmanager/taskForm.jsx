import { useState } from "react";

function TaskForm({addTask}){
    const [value,setValue]=useState("")
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(value.trim()){
        console.log("Form Submitted",value)
        addTask(value)
        setValue("")
        }
    }
    return(
        <div>
            <form action="" onSubmit={handleSubmit}>

                <input type="text" placeholder="Add a Task..." name=""
                 id="" className="input-field"
                 value={value}
                  onChange={(e)=>setValue(e.target.value)}/>

                <button type="submit" className="add-task-btn">Add</button>
            </form>
        </div>
    )
}

export default TaskForm