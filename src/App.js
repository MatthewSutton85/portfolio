import logo from './logo.svg';
import $ from 'jquery';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import resumeData from './resumeData';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData}/>
      <About resumeData={resumeData} />
      <Resume resumeData={resumeData}/>
      <Portfolio/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
