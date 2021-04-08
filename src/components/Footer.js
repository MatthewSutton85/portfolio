import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends Component {
  render() {

    return (     
        <Container id="footer">
          <Row>
            <Col>
              <p>Copyright 2021, Matthew Sutton</p>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default Footer;