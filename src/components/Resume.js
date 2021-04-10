import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';

class Resume extends Component {
  render() {

    return (     
        <Container id="resume">
          <Row>
            <Col><h2>Resume</h2></Col>
          </Row>
          <Tab.Container className="list-group" defaultActiveKey="#first">
          <Row>
            <Col>
              <h4>Education</h4>
              <ListGroup>
                <ListGroup.Item action href="#first">
                  <p>Diploma of Software Development</p>
                </ListGroup.Item>
                <ListGroup.Item action href="#second">
                  <p>Diploma of Web Development</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <Tab.Content>
                <Tab.Pane eventKey="#first">
                  <h4>Diploma of Software Development</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi ante, auctor id elit ullamcorper, placerat auctor massa. Sed vel tempus massa. 
                  Etiam eget orci id ligula dapibus semper vitae at arcu. Aliquam sagittis pretium orci. Vestibulum mattis odio nec massa vestibulum, et euismod lorem scelerisque.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="#second">
                  <h4>Diploma of Web Development</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi ante, auctor id elit ullamcorper, placerat auctor massa. Sed vel tempus massa. 
                  Etiam eget orci id ligula dapibus semper vitae at arcu. Aliquam sagittis pretium orci. Vestibulum mattis odio nec massa vestibulum, et euismod lorem scelerisque.</p>
                </Tab.Pane>
              </Tab.Content>              
            </Col>            
            </Row>
            </Tab.Container>  
            <Tab.Container className="list-group" defaultActiveKey="#UTG">
          <Row>
            <Col>
              <h4>Experience</h4>
              <ListGroup>
                <ListGroup.Item action href="#UTG">
                  <p>Unlock The Game</p>
                </ListGroup.Item>
                <ListGroup.Item action href="#freelance">
                  <p>Freelance</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <Tab.Content>
                <Tab.Pane eventKey="#UTG">
                  <h4>Unlock The Game</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi ante, auctor id elit ullamcorper, placerat auctor massa. Sed vel tempus massa. 
                  Etiam eget orci id ligula dapibus semper vitae at arcu. Aliquam sagittis pretium orci. Vestibulum mattis odio nec massa vestibulum, et euismod lorem scelerisque.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="#freelance">
                  <h4>Freelance</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi ante, auctor id elit ullamcorper, placerat auctor massa. Sed vel tempus massa. 
                  Etiam eget orci id ligula dapibus semper vitae at arcu. Aliquam sagittis pretium orci. Vestibulum mattis odio nec massa vestibulum, et euismod lorem scelerisque.</p>
                </Tab.Pane>
              </Tab.Content>              
            </Col>            
            </Row>
            </Tab.Container>
        </Container>
    );
  }
}

export default Resume;