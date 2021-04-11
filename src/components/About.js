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
            <br></br>
              <p>
                My name is Matthew, a 30 something year old developer from {resumeData.state}.
              </p>
              <p>In my years of studying and being a developer I have learned a lot about multiple areas of development, design, working in a team, remote working, client relationships, 
                project management, just to name a few. My goal is to achieve a role as a developer working remotely and providing high quality work, on time, for affordable rates. 
                No matter the challange, I am always up for the task. Even though I am considered a junior, and may not have years of experience, I can only give you my word that I will 
                work hard to ensure all work is carried out to your standards as well as my own.
              </p>
            </Col>
            <Col>
              <img src="https://i.imgur.com/eKzN2We.png" alt="Profile Picture" width="300"/>
            </Col>
          </Row>          
        </Container>
      </React.Fragment>
      
    );
  }
}

export default About;