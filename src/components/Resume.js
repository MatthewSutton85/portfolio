import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Resume extends Component {
  render() {

    return (     
        <Container id="resume">
          <Row>
            <Col><h2>Resume</h2></Col>
          </Row>
          <Row>
            <Col>
              <h4>Education</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi ante, auctor id elit ullamcorper, placerat auctor massa. Sed vel tempus massa. 
                  Etiam eget orci id ligula dapibus semper vitae at arcu. Aliquam sagittis pretium orci. Vestibulum mattis odio nec massa vestibulum, et euismod lorem scelerisque.</p>
            </Col>
            <Col>
              <h4>Experience</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi ante, auctor id elit ullamcorper, placerat auctor massa. Sed vel tempus massa. 
                Etiam eget orci id ligula dapibus semper vitae at arcu. Aliquam sagittis pretium orci. Vestibulum mattis odio nec massa vestibulum, et euismod lorem scelerisque.</p>
            </Col>
            
          </Row>
          <Row>
            <Col>
              <h4>Skills</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi ante, auctor id elit ullamcorper, placerat auctor massa. Sed vel tempus massa. 
                Etiam eget orci id ligula dapibus semper vitae at arcu. Aliquam sagittis pretium orci. Vestibulum mattis odio nec massa vestibulum, et euismod lorem scelerisque.</p>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default Resume;