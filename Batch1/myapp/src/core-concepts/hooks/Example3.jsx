import { useEffect, useState, useRef } from "react"

function Example3(){
    const [inputValue,setInputValue]=useState("")
    const cout=useRef(0);

    useEffect(()=>{
        cout.current=cout.current+1
    })
    return <>
    <input type="text" value={inputValue} onChange={(event)=> setInputValue(event.target.value)}/>
    <p> Render count: {cout.current}</p>
    </>
}

export default Example3