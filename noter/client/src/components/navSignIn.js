import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavSignIn = () => {
    return ( 
        <Navbar className="bg-light w-100" expand="lg" variant="light">
            <Container>
                {/* Brand */}
                <NavLink to="/">
                    <Navbar.Brand className="btn btn-sm text-primary rounded-pill border border-primary border-2 px-3 py-2">Brand</Navbar.Brand>
                </NavLink>

                {/* Collapse button */}
                <Navbar.Toggle className="border border-0" aria-controls="links"/>

                {/* navbar-collapse */}
                <Navbar.Offcanvas className="bg-primary" placement="end" id="links">
                    <Offcanvas.Header className="justify-content-end" closeVariant="white" closeButton></Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1">
                            <Nav.Item className="my-1 mx-2 d-flex justify-content-center">
                                <NavLink to="/contact" className="btn rounded-pill px-3 py-2 text-light border border-light border-2">Contact Us</NavLink>
                            </Nav.Item>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
     );
}
 
export default NavSignIn;