import { useState } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navigation = () => {
  const [show, setShow] = useState(false); // State to control Offcanvas visibility

  const handleClose = () => setShow(false); // Close the Offcanvas
  const handleShow = () => setShow(true);  // Open the Offcanvas

  return (
    <>
      <Navbar expand={false} className="bg-body-secondary mb-3 purpleNavBar" fixed="top" data-bs-theme="purple">
        <Container fluid>
          <Navbar.Brand as={Link} to="/"><em>The Access Lens</em></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} /> {/* Open Offcanvas */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show} // Controlled by state
            onHide={handleClose} // Close the Offcanvas when it is hidden
            className="bg-body-tertiary purpleNavBar"
            data-bs-theme="purple"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"><em>The Access Lens</em></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
                <Nav.Link as={Link} to="/TheJourney" onClick={handleClose}>The Journey</Nav.Link>
                <NavDropdown title="Understanding Accessibility" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item as={Link} to="/UnderstandingAccessibility/ColorBlindness" onClick={handleClose}>
                    Color Blindness
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/UnderstandingAccessibility/Dyslexia" onClick={handleClose}>
                    Dyslexia
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/UnderstandingAccessibility/ADHDNeurodivergence" onClick={handleClose}>
                    ADHD/Neurodivergence
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/About" onClick={handleClose}>About</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;