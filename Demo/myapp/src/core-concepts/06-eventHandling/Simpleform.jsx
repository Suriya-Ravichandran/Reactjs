function SimpleForm(){
    const handlesubmit =(event)=>{
        event.preventDefault();
        console.log(event.target.name.value)
        console.log(event.target.email.value)
    }
    return <>
    <h1>Simple form</h1>
    <form onSubmit={handlesubmit}>
        <input type="text" placeholder="Enter Name" name="name"/>
        <br />
        <input type="text" placeholder="Enter Email" name="email"/>
        <br />
        <br />
        <button className="bg-color">Submit</button>
    </form>
    </>
}

export default SimpleForm