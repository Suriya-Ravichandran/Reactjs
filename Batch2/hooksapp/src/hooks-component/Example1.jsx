import { useState } from "react"

function Example1(){
   const [count,setCount]=useState(0)
    let square=count*count
    return<>
        <h1>This is count Example</h1>
        <p>Count:{count}</p>
        <p>Square: {square}</p>
        <button onClick={()=>setCount(count+1)}>increament</button>
    </>
}

export default Example1