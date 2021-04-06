import React, { Component } from 'react';

class Header extends Component {
  render() {

    return (     
        <div id="header" className="container-fluid">
         <h1>Matthew Sutton</h1>         
         <ul class="nav justify-content-center">
            <li class="nav-item">
               <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
               <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
               <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
               <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
         </ul>
      </div>
    );
  }
}

export default Header;