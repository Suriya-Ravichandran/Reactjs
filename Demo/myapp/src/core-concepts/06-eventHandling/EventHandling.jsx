import { useState } from "react"

function EventHandling(){
    const[message,setmessage]=useState("")
    const handleChange= (event)=>{
        setmessage(event.target.value)
    }
    return<>
    <h1>Event Handling Example</h1>
    <input type="text" onChange={handleChange} placeholder="Enter Text ... "/>
    <p>{message}</p>
    </>
}

export default EventHandling