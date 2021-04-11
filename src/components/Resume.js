import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';

class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (     
      <React.Fragment>
        {/*generated-code*/}
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
                  <p>{resumeData.edu1}</p>
                </ListGroup.Item>
                <ListGroup.Item action href="#second">
                  <p>{resumeData.edu2}</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <Tab.Content>
                <Tab.Pane eventKey="#first">
                  <h4>{resumeData.edu1}</h4>
                  <p>During this diploma I learned a lot about various subjects such as working in teams, managing teams, managing projects, ethics, copyright laws as well as developing Android apps, which
                    is the main focus of the diploma, App development. I created apps that integrate APIs and libraries, databases, material design, coding and design standards and so on. It was a great experience and 
                    I learned a lot of valuable information.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="#second">
                  <h4>{resumeData.edu2}</h4>
                  <p>This diploma was more focused on the website development aspects, working with HTML5, CSS3, Javascript, design principles, standards, and so on. We also created shopping carts, backend databases, user logins
                    and so on.
                  </p>
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
                  <p>{resumeData.role1}</p>
                </ListGroup.Item>
                <ListGroup.Item action href="#freelance">
                  <p>{resumeData.role2}</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <Tab.Content>
                <Tab.Pane eventKey="#UTG">
                  <h4>{resumeData.role1}</h4>
                  <p>My time at Unlock The Game lasted for 12 months, as that was the end of my contract, during this time I worked exclusively with WordPress, of which I am quite familar. The websites I created were pre-designed by 
                    other team members, which I then built using Divi, a WordPress plugin. The websites were mostly the same, as that is what the company offered, but each had their own little challenges. It was a remote role, and I worked 
                    with some great people and learned a lot.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="#freelance">
                  <h4>{resumeData.role2}</h4>
                  <p>For several years I did some small amounts of freelance work. Small projects for friends and family, as well as maintaining some other websites of which I did not build, but took over. I enjoy the freedom of freelance but 
                    I am not in a professional position to maintain that level of work just yet, as it takes time to build client relationships and business.
                  </p>
                </Tab.Pane>
              </Tab.Content>              
            </Col>            
            </Row>
            </Tab.Container>
        </Container>
      </React.Fragment>
    );
  }
}

export default Resume;