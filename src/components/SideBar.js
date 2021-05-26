import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';


export default function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Local Data</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            This is where we are going to display the API results.
            Format will depend on results we gather. 
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  