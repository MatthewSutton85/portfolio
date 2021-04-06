import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
  render() {

    return (     
        <div id="header" className="container-fluid">
         <h1 className="display-1">Matthew Sutton</h1>         
         <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Nav.Item>
               <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link eventKey="link-1">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link eventKey="link-2">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link eventKey="link-3">Contact</Nav.Link>
            </Nav.Item>
         </Nav>
      </div>
    );
  }
}

export default Header;