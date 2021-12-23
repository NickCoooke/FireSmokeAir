import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../styles/InfoBox.css';

// We are going to import JSON below and run a script rendering 
// them into a flexbox list. Hopefully we can allow a filter via tag

const InfoBox = (props) => {
    return (
    <Container id="ContactUs" classNme="bg-darl justify-content-center">
      <Row>
          <h2 className='text-center'> Contact Us</h2>
          <p>
            You can reach us at <a href="mailto: nickcoooke@gmail.com">nickcoooke@gmail.com</a>,
          </p>
          <p>
            or on <a href="https://github.com/NickCoooke">github@NickCoooke</a>.
          </p>
      </Row>  
    </Container>
    );
}
export default InfoBox;