function Skills() {
    return (
        <div className="container-fluid skils pt-5 pb-5 mt-5 ">
            <h1 className="text-center"> My skills</h1>
            <div className="container">
                <div className="row mt-3">
                    <div className="col">
                        <h1>Html</h1>
                        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: '25%' }}>25%</div>
                        </div>
                    </div>
                    <div className="col">
                        <h1>Css</h1>
                        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: '25%' }}>25%</div>
                        </div>
                    </div>
                    <div className="col">
                        <h1>Js</h1>
                        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: '25%' }}>25%</div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <h1>ReactJs</h1>
                        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: '25%' }}>25%</div>
                        </div>
                    </div>
                    <div className="col">
                        <h1>NodeJS</h1>
                        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: '25%' }}>25%</div>
                        </div>
                    </div>
                    <div className="col">
                        <h1>Mongo DB</h1>
                        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: '25%' }}>25%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
