import './App.css';
import NavFrame from './components/NavFrame/NavFrame.js'
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {

  // const options = {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.4
  // }

  // const setupIntersectionObserver = () => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         // Do something when the element enters the viewport
  //         entry.target.classList.add("new")

  //       } else {
  //           entry.target.classList.remove("new")
  //       }
  //     })
  //   }, options)
  
  //   const hiddenElements = document.querySelectorAll(".__hidden__")
  //   hiddenElements.forEach(el => observer.observe(el))
  // }
  
  // window.addEventListener("load", setupIntersectionObserver)

  
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

/* background-color: #FFE1A4; */