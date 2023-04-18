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
      <Home/>
      <AboutMe/>
      <ProjectsPage/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;

    /* background-color: #FFE1A4; */