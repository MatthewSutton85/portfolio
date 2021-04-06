import React, { Component } from 'react';

class Header extends Component {
  render() {
   let resumeData = this.props.resumeData;
    return (             
         <React.Fragment>
            {/*generated code*/}
            <header id="home">
               <div className="container-fluid">
                  <div className="banner-text">
                     <h1 className="display-1">{resumeData.name}</h1>
                     <h3>{resumeData.role}</h3>
                  </div>
               </div>
            </header>
         </React.Fragment>
    );
  }
}

export default Header;