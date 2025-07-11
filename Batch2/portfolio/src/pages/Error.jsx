import Footer from "./template/footer"
import Header from "./template/Header"

function Error(){
    return<>
    <Header/>
    <h1 className="text-center">404</h1>
    <p className="text-center">Page not found <a href="" className="btn btn-primary">Back to Home</a></p>
    <Footer/>
    </>
}

export default Error