import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const HeroSignIn = () => {
    return ( 
        <Container className="h-100 bg-light d-flex align-items-center">
            <Container className="d-flex flex-column align-items-center h-50 py-3 mt-4" style={{maxWidth: "500px"}}>
                
                {/* Header */}
                <div className="container d-flex w-100 mb-4 justify-content-center">
                    <h1 className="fw-medium text-primary">Sign In</h1>
                </div>

                {/* Email and Password */}
                <div className="w-100">
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input className="form-control" placeholder="name@example.com"></input>
                    </div>
            
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input className="form-control"></input>
                    </div>
                </div>

                {/* Sign In Button */}
                <NavLink to="/auth" className="btn btn-large bg-primary rounded-50 text-light mt-3">Sign in</NavLink>

                {/* Terms and Conditions */}
                <h6 className="text-secondary fw-light text-center mt-4">By continuing, you are agreeing to the <NavLink className="text-primary">Terms of Use</NavLink> and <NavLink className="text-primary">Privacy Policy</NavLink>.</h6>
            </Container>
        </Container>
        );
    }
    
    export default HeroSignIn;
    
    
    {/* External Links */}
    {/* <Container className="d-flex justify-content-between ">
            <NavLink className="btn btn-large border border-1" href="">Instagram</NavLink>
            <NavLink className="btn btn-large border border-1" href="">Google</NavLink>
            <NavLink className="btn btn-large border border-1" href="">LinkedIn</NavLink>
        </Container> */}
    