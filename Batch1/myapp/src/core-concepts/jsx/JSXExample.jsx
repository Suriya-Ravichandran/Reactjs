function JSXExample() {
    const product = [
        { pid: 1, pname: "Apple", price: 200, dist: "30%" }, //0
        { pid: 2, pname: "Orange", price: 300, dist: "50%" },//1
        { pid: 3, pname: "Graphs", price: 100, dist: "20%" },//2
        { pid: 4, pname: "Pine apple", price: 200, dist: "20%" },//3
    ];

    return (
        <div className="container">
            <h1 className="text-center">Product List</h1>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Pname</th>
                        <th scope="col">Price</th>
                        <th scope="col">Dist</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{item.pid}</th>
                            <td>{item.pname}</td>
                            <td>{item.price}</td>
                            <td>{item.dist}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default JSXExample;
