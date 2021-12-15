import {Offcanvas, Button} from 'react-bootstrap';
import {useState } from 'react';

import '../styles/SideBar.css';

const options = {
    name: 'Enable body scrolling',
    scroll: true,
    backdrop: false,
    position: 'end',
}

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTrigger = () => setShow(!show);

  return (
    <>
      <Button variant="dark" onClick={handleTrigger}>
        <svg xmlns="http://www.w3.org/2000/svg" 
             width="32" 
             height="32" 
             fill="currentColor" 
             className="bi bi-info-square" 
             viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Welcome to FireSmoke Air \n
                          (in development)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>  We are a website designed to help people stay appraised of the regional air quality during wildfire seasons and connect to powerful tools and resources.
            Currently, we're working out some kinks with the map, continuing to deepen our knowlege on wildfires, and connecting folks to more, useful information.
          </p>
          <p> Thank you for stopping by! </p>
          <p> Best, </p>
          nicC
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function Example() {
  return (
    <>
      <OffCanvasExample id='SideBar' key={0} {...options} placement='end' />
   </>
  );
}

/* Source
  https://deploy-preview-5738--react-bootstrap-v5.netlify.app/components/offcanvas/
*/