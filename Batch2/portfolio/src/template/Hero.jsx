import herobg from '../assets/herobg.jpg'

function Hero(){
    return<>
    <div className="container-fluid bg-dark text-white hero">
        <div className="container col-xxl-8 px-4 py-5"> 
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5"> 
                <div className="col-10 col-sm-8 col-lg-6"> 
                    <img src={herobg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/> 
                </div> 
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-white lh-1 mb-3">Albin Geo Sam</h1> 
                    <p className="lead">Hi, I'm Albin Geo Sam — a passionate MERN stack developer who loves building fast, scalable, and user-friendly web applications. From crafting clean APIs to designing responsive interfaces, I bring ideas to life with modern JavaScript technologies.</p> 
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start"> 
                        {/* modal */}
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Hire me</button>
                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form method='POST'>
                                        <div className="mb-3">
                                            <label for="recipient-name" className="col-form-label">Recipient:</label>
                                            <input type="text" className="form-control" id="recipient-name"/>
                                        </div>
                                        <div className="mb-3">
                                            <label for="message-text" className="col-form-label">Message:</label>
                                            <textarea className="form-control" id="message-text"></textarea>
                                        </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Send message</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Download CV</button> 
                    </div>
                </div>
            </div> 
        </div>
    </div>
    </>
}

export default Hero