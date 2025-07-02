function PropsExample({name,department}){
    return(
    <>
        <div className="container">
            <h1 className="text-center">Props example</h1>
            <p>Hello, {name}</p>
            <p>Department: {department}</p>
        </div>
    </>
   
    )
}

export default PropsExample