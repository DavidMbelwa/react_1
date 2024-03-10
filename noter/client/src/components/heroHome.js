import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Hero_home = () => {
    return ( 
        <div className="container-fluid h-100 d-flex justify-content-center align-items-center px-3 py-5">
            <div className="container d-flex flex-column align-items-center justify-content-center h-75" style={{maxWidth: "500px"}}>
                <h1 className="pb-3 display-3 text-center fw-bolder text-light w-100">Become a Legend</h1>
                <h3 className="fw-light lead pb-3 text-light text-center">Document your learning journey and share it with the world.</h3>
                <Nav className="mt-5 d-flex flex-column align-items-center">
                    <Nav.Item className="mb-2">
                        <NavLink to="/sign-up" className="btn btn-large bg-light text-primary border border-2 rounded-pill">Create Account</NavLink>
                    </Nav.Item>
                    <Nav.Item className="mb-2">
                        <NavLink to="/sign-in" className="btn btn-large bg-primary text-light border border-2 rounded-pill">Sign In</NavLink>
                    </Nav.Item>
                    <h6 className="text-light fw-light text-center mt-3">By continuing, you are agreeing to the <NavLink className="text-light">Terms of Use</NavLink> and <NavLink className="text-light">Privacy Policy</NavLink>.</h6>
                </Nav>
            </div>
        </div>
     );
}
 
export default Hero_home;