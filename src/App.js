import './App.css';
import NavFrame from './components/NavFrame/NavFrame.js'
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <NavFrame/>
      <Home/>
      <AboutMe/>
      <ProjectsPage/>
      <Skills/>
    </div>
  );
}

export default App;

