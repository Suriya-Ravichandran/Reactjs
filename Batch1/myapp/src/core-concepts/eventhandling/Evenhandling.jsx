import { useState } from "react"

function Evenhandling(){
    const [message,setmessage]=useState("")
    const handlechange=(event)=>{
        setmessage(event.target.value)
    }

    return <>
        <h1 className="text-center">Event handling Example</h1>
        <h1 className="text-center">
            <input type="text" onChange={handlechange} placeholder="Enter your text here"/>
        </h1>
        <p className="text-center">{message}</p>
    </>
}

export default Evenhandling