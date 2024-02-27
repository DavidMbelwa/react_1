// Dependencies
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
//import Offcanvas from "react-bootstrap/Offcanvas"

const Navigation = () => {
    return(
        <Navbar expand="lg">
            <Container>
                {/* Brand */}
                <Navbar.Brand className="btn btn-sm text-light rounded-pill border border-2 px-3 py-2">Brand</Navbar.Brand>

                {/* Collapse button */}
                <Navbar.Toggle className="border border-light border-2" aria-controls="links"/>

                {/* navbar-collapse */}
                <Navbar.Offcanvas className="align-items-center bg-primary" id="links">
                    <Nav className="me-auto">
                        <Nav.Link className="btn me-auto px-4 py-2 btn-large border border-2 text-light rounded-pill" href="">Sign In</Nav.Link>
                    </Nav>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Navigation;