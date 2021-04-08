import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

class Portfolio extends Component {
  render() {

    return (     
        <Container id="portfolio">
          <Row>
            <Col><h2>Portfolio</h2></Col>
          </Row>
          <Row className="portfolioRow">
            <CardDeck>
              <Card>
                <Card.Img variant="top" src="https://i.imgur.com/QYsqD0k.jpg" />
                <Card.Body>
                  <Card.Title>Project One</Card.Title>
                  <Card.Text>
                    This is project one template
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://i.imgur.com/QYsqD0k.jpg" />
                <Card.Body>
                  <Card.Title>Project One</Card.Title>
                  <Card.Text>
                    This is project one template
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://i.imgur.com/QYsqD0k.jpg" />
                <Card.Body>
                  <Card.Title>Project One</Card.Title>
                  <Card.Text>
                    This is project one template
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>    
        </Container>
    );
  }
}

export default Portfolio;