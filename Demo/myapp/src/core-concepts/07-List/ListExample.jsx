function ListExample(){
    const iteam=["Apple","Banana","Cherry"]

    return <>
    <h1>List Example</h1>
    <ul>
        {iteam.map((iteam,index)=> <li key={index}>{iteam}</li>
        )}
    </ul>
    </>
}

export default ListExample