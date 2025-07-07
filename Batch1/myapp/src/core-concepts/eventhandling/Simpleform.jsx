function Simpleform(){

    const handlesubmit=(event)=>{
        event.preventDefault()
        alert("Name: "+event.target.name.value+" "+"Email: "+event.target.email.value)
    }

    return<>
    <h1 className="text-center">Sample Form</h1>
    <h1 className="text-center">
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder="Enter your name" name="name"/>
            <br />
            <input type="text" placeholder="Enter your email" name="email"/>
            <br />
            <button className="btn btn-primary">Submit</button>
        </form>
    </h1>
    </>
}

export default Simpleform