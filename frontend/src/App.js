import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/App.css';

import Map from './components/Map';
import TopBar from './components/TopBar';
import InfoBox from './components/InfoBox';
//import AirNow from './adapters/AirNowAPI';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => {
        console.log(res.express);
        this.setState({data: res.express })
      })
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  
  render() {
    return (
      <>
        <h1 className="App-title">Backend Connection: {this.state.data}</h1>
      <Container fluid>
        <Row >
          <TopBar />
        </Row>
      <Row>
        <Col>
          <Map />
        </Col>
      </Row>
      <Row>
        <Col>
          <InfoBox />
        </Col>
      </Row>
      </Container>
      </>
    );
  }
}
export default App;

/* Sources
How to handle secret Keys
  https://hackernoon.com/how-to-use-environment-variables-keep-your-secret-keys-safe-secure-8b1a7877d69c

*/
