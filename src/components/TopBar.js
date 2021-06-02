import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import {  Container,
          Navbar,
          Nav,
          NavDropdown,
} from 'react-bootstrap'

/*************TODO *******************
 * Connect filters to Filter dropdown
 * Build Contact us Popup 
 * Add Icon on left 
 */

export default function TopBar () {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Router>
            <Navbar bg="dark" variant="dark" expand="md" sticky="top" >
              <Container fluid>
                <Navbar.Brand href="#home"> Fire Smoke Air</Navbar.Brand>
                  <Navbar.Toggle aria-controls="header-navbar" />
                    <Navbar.Collapse id="header-navbar">
                      <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about-us">Contact Us</Nav.Link>
                        <Nav.Link href="/contact-us">About Us</Nav.Link>
                        <NavDropdown title="Filter" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/Ozone">Ozone</NavDropdown.Item>
                          <NavDropdown.Item href="#action/PM25">PM2.5</NavDropdown.Item>
                          <NavDropdown.Item href="#action/PM10">PM10</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="http://npi.gov.au/resource/particulate-matter-pm10-and-pm25">What are these?</NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
          </Router>
        </div>
      </div>
    </div>
  );
}

/* Sources
  https://www.codegrepper.com/code-examples/javascript/react-bootstrap+header
*/