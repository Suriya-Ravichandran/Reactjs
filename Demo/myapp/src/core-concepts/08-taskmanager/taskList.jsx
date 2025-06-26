function TaskList({tasks,toggleTask,deleteTask}){
    return (<div className="list">
        <ul>
            {tasks.map((tasks,index)=><li id="task-list"key={index}>
             <span onClick={()=>toggleTask(tasks['id'])} className={tasks['complete']==true && 'completed'}>{tasks['text']}</span>
             <span onClick={()=>deleteTask(tasks['id'])} className="delete">X</span>
             </li>)}
        </ul>
    </div>
    )
}

export default TaskList