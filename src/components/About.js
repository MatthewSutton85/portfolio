import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class About extends Component {
  render() {

    return (
      <Container fluid className="App-about-cont">
        <Row>
          <Col>
            <h3 class ="display-3">
                About me
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              My name is Matthew, a 30 something year old developer from Queensland
            </p>
          </Col>
        </Row>          
      </Container>
    );
  }
}

export default About;