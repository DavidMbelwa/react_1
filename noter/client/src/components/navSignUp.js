import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";

const SignUpNav = () => {
    return ( 
        <Navbar className="bg-body-primary w-100" expand="lg">
            <Container>
                {/* Brand */}
                <Navbar.Brand className="btn btn-sm text-light rounded-pill border border-2 px-3 py-2">Brand</Navbar.Brand>

                {/* Collapse button */}
                <Navbar.Toggle className="border border-light border-2" aria-controls="links"/>

                {/* navbar-collapse */}
                <Navbar.Offcanvas className="bg-primary" placement="end" id="links">
                    <Offcanvas.Header className="justify-content-end" closeVariant="white" closeButton></Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1">
                            <Nav.Item className="my-1 mx-2 d-flex justify-content-center">
                                <NavLink to="../pages/contact" className="btn rounded-pill px-3 py-2 text-light border border-light border-2">Contact Us</NavLink>
                            </Nav.Item>
                            <Nav.Item className="my-1 mx-2 d-flex justify-content-center">
                                <NavLink to="../pages/sign-in" className="btn rounded-pill px-3 py-2 text-light border border-light border-2">Sign In</NavLink>
                            </Nav.Item>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
     );
}
 
export default SignUpNav;