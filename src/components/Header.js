import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Header extends Component {
  render() {
   let resumeData = this.props.resumeData;
    return (             
         <React.Fragment>
            {/*generated code*/}
            <Container id="home">
               <Row className="container-fluid">
                  <Col className="banner-text">
                     <h1 className="display-1">{resumeData.name}</h1>
                     <h3>{resumeData.role}</h3>
                  </Col>
               </Row>
            </Container>
         </React.Fragment>
    );
  }
}

export default Header;