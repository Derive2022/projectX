
import './App.css';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom"
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Earth from './Pages/Earth';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
  
    <div className="App">
      <Navbar />
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="projects" element={ <Projects /> } />
        <Route path="contact" element={ <Contact /> } />
        <Route path="earth" element={ <Earth /> } />
      </Routes>
    </div>
    </>
  );
}

export default App;
