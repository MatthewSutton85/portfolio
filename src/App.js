import logo from './logo.svg';
import $ from 'jquery';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import resumeData from './resumeData';

import Particles from 'react-particles-js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
        "detect_on": "window",
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
      <Header resumeData={resumeData} />
      <About resumeData={resumeData} />
	  <Portfolio resumeData={resumeData} />
      <Resume resumeData={resumeData} />      
      <Contact resumeData={resumeData} />
      <Footer resumeData={resumeData} />
    </div>
  );
}

export default App;
