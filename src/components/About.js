import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        {/*generated-code*/}
        <Container className="App-about-cont" id="about">
          <Row>            
            <Col>
              <h4 class ="display-4">
                  About me
              </h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                My name is Matthew, a 30 something year old developer from {resumeData.state}.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi ante, auctor id elit ullamcorper, placerat auctor massa. Sed vel tempus massa. 
                Etiam eget orci id ligula dapibus semper vitae at arcu. Aliquam sagittis pretium orci. Vestibulum mattis odio nec massa vestibulum, et euismod lorem scelerisque.</p>
            </Col>
            <Col>
              <p>Photo</p>
            </Col>
          </Row>          
        </Container>
      </React.Fragment>
      
    );
  }
}

export default About;