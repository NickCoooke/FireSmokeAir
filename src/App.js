
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/App.css';


import Map from './components/Map';
//import TopBar from './components/TopBar';
import Search from './components/Search';
import SideBar from './components/SideBar'



export default function App() {
  return (
      <Container fluid>
        <Row>
          <Col xs={2}>
            home button
          </Col>
          <Col xs={8}>
            <Search />
            Search Bar 
          </Col>
          <Col xs={2}>
            <SideBar />
          </Col>
        </Row>
      <Row>
        <Col>
          <h2> MAP </h2>
          <Map />
        </Col>
      </Row>
      </Container>
  );
}
