import { useEffect, useState } from "react"

function Example1(){
    const [count,setCout]=useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCout((count)=> count+1)
        },2000)
    })
    return <>
        <h1 className="text-center">Coutdown Here: {count}</h1>
    </>
}

export default Example1