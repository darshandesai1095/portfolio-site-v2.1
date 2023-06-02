import './App.css';
import NavFrame from './components/NavFrame/NavFrame.js'
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {
  
  return (
    <div className="App">
      <NavFrame/>
      <section id="home"      className="__hidden__"><Home/></section>
      <section id="about"     className="__hidden__"><AboutMe/></section>
      <section id="projects"  className="__hidden__"><ProjectsPage/></section>
      <section id="skills"    className="__hidden__"><Skills/></section>
      <section id="contact"   className="__hidden__"><Contact/></section>  
    </div>
  );
}

export default App;