import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/App.css';

import Map from './components/Map';
import TopBar from './components/TopBar';
import InfoBox from './components/InfoBox';
import ContactUs from './components/ContactUs';
//import Posts from './components/apiPost';
//import AirNow from './adapters/AirNowAPI';

class App extends Component {

  render() {
    return (
      <>
      <Container fluid className='btn-dark'>
        <Row >
          <TopBar />
        </Row>
      <Row>
        <Col>
          <Map />
        </Col>
      </Row>
      <Row>
        <Col >
          <InfoBox />
        </Col>
      </Row>
      <Row>
        <Col>
          <ContactUs />
        </Col>
      </Row>
      </Container>
      </>
    );
  }
}
export default App;
