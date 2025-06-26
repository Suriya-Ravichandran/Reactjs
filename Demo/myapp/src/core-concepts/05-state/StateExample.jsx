import { useState } from "react"

function StateExample(){
    const [count,setCount]=useState(0);
    const handleclick=()=>{
        setCount(count+1)
    }
    return <>
    <h1>State Example</h1>
    <h3> Counter {count}</h3>
    <button className="bg-color" onClick={handleclick}>Increament</button>
    </>
}

export default StateExample  