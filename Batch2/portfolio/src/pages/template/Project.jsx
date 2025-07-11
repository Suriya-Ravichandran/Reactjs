function Project() {
    const project = [
        { id: 1, project: "Ecommerce Website", Description: "Hello this is the project" },
        { id: 2, project: "Ecommerce App", Description: "Hello this is the project" },
        { id: 3, project: "Ecommerce Website", Description: "Hello this is the project" },
        { id: 4, project: "Ecommerce Website", Description: "Hello this is the project" },
    ];

    return (
        <div className="container-fluid mt-5 pt-5 pb-5">
            <div className="container">
                <div className="row">
                    {project.map((projects, index) => {
                        return (
                            <div className="col-md-4 mb-4" key={projects.id}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src="https://via.placeholder.com/286x180" className="card-img-top" alt="Project Thumbnail" />
                                    <div className="card-body">
                                        <h5 className="card-title">{projects.project}</h5>
                                        <p className="card-text">{projects.Description}</p>
                                        <a href="https://www.google.com" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Project;
