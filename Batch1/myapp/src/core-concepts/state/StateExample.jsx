import { useState } from "react"


function StateExample(){
    const [count,setCount]=useState(0);
    const handleclick=()=>{
        setCount(count+1)
    }
    const decreament=()=>{
        setCount(count-1)
    }
    return <>
        <h1 className="text-center">State Examples</h1>
        <h3 className="text-center"> Counter {count}</h3>
        <h1 className="text-center">
            <button className="btn btn-primary me-3" onClick={handleclick}> Increament</button>  
            <button className="btn btn-danger" onClick={decreament}>Decreament</button>
        </h1>
    </>
}

export default StateExample