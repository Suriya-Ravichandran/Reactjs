import { useState } from "react"



function Component1(){
    const [data,setData]=useState("Foo")
    
    return<>
    <h1>Hello {data}</h1>
    <Component2 data={data}/>
    </>
}

function Component2({data}){
    
    return<>
    <h1> component 2 Hello {data} </h1>
    </>
}

export default Component1;
export { Component2 };