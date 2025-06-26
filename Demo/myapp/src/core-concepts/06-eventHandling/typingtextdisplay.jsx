import { useState } from "react"

function TypingText(){
    const[message,setMessage]=useState("")
    const handleonchange=(event)=>{
        setMessage(event.target.value)
    }
    return<>
        <h1>Typing Text Display</h1>
        <input type="text" onChange={handleonchange} placeholder="Enter Text Here" className="Typing-text"/>
        <p className="message">{message}</p>
    </>
}

export default TypingText