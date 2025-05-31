// src/App.jsx
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx'; // <--- Add this import

function App() {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: '80px' }}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        {/* All main sections are now above the footer */}
      </div>
      <Footer /> {/* <--- Add the Footer component here, outside the main content div */}
    </div>
  );
}

export default App;