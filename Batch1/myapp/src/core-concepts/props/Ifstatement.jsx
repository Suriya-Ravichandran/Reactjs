import Hello from "./Hello"
import World from "./world"

function Ifstatement(props){
    const data=props.data

    if(data){
        return <Hello/>
    }
    else{
        return <World/>
    }
}

export default Ifstatement