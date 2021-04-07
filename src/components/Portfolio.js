import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Portfolio extends Component {
  render() {

    return (     
        <Container id="portfolio">
          <Row>
            <Col><h2>Portfolio</h2></Col>
          </Row>
          <Row className="portfolioRow">

            <Col>
              <div className="project-thumbnail">
                <img src="https://i.imgur.com/QYsqD0k.jpg" alt="project placeholder"/>
              </div>
            </Col>

            <Col>
              <div className="project-thumbnail">
                <img src="https://i.imgur.com/QYsqD0k.jpg" alt="project placeholder"/>
              </div>
            </Col>

            <Col>
              <div className="project-thumbnail">
                <img src="https://i.imgur.com/QYsqD0k.jpg" alt="project placeholder"/>
              </div>
            </Col>

          </Row>
          <Row>
            <Col>
              <div className="project-thumbnail">
                <img src="https://i.imgur.com/QYsqD0k.jpg" alt="project placeholder"/>
              </div>
            </Col>

            <Col>
            <div className="project-thumbnail">
              <img src="https://i.imgur.com/QYsqD0k.jpg" alt="project placeholder"/>
            </div>
            </Col>
            
            <Col>
              <div className="project-thumbnail">
                <img src="https://i.imgur.com/QYsqD0k.jpg" alt="project placeholder"/>
              </div>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default Portfolio;