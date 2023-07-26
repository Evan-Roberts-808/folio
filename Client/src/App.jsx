import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import './stylesheet/styles.css';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import TechSkills from './components/TechSkills';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <Intro />
      <About id="about"/>
      <TechSkills id="techskills"/>
      <Portfolio id="portfolio"/>
      <Education id="education"/>
      <Blog id="blog"/>
      <Contact id="contact"/>
      <Footer />
    </>
  )
}

export default App
