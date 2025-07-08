import { Link } from "react-router-dom"

function Header(){
    return <>
       <nav className="navbar navbar-expand-lg bg-dark text-white sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand text-white ms-3" href="#">Albin Geo Sam</a>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                 </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            {/*  */}
                            <Link to="/about" style={{textDecoration: "none"}}><a className="nav-link text-white">About</a></Link>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link text-white" href="#">Skills</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Project
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white disabled me-3" aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default Header