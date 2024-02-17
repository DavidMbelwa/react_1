// Dependencies
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import Offcanvas from "react-bootstrap/Offcanvas"

const Navigation = () => {
    return(
        <Navbar expand="lg">
            <Container className="container-fluid py-2 px-4 justify-content-between">

                {/* Brand */}
                <Navbar.Brand className="bg-secondary rounded-pill px-3 py-2 text-primary">Brand</Navbar.Brand>

                {/* Collapse button */}
                <Navbar.Toggle aria-controls="links"/>

                {/* navbar-collapse */}
                <Navbar.Offcanvas className="justify-content-end border border-secondary" id="links">
                    <Nav>
                        <Nav.Link className="btn btn-large border border-secondary border-2 text-secondary rounded-pill" href="">Link 1</Nav.Link>
                        <Nav.Link className="btn btn-large border border-secondary border-2 text-secondary rounded-pill" href="">Link 2</Nav.Link>
                        <Nav.Link className="btn btn-large rounded-pill bg-secondary text-primary fw-medium" href="">Link 3</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;