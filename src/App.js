
import './App.css';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom"
import Projects from './Pages/Projects';
import NavBar1 from './components/NavBar1';
import Carousel from './Pages/Carousel';
import Designs from './Pages/Designs';
import Todo from './Pages/Todo';


function App() {
  return (
    <>
  
    <div className="App">
      {/* <Navbar /> */}
      <NavBar1 />
    <Routes>
        <Route path="/Home" element={ <Home /> } />
        <Route path="Projects" element={ <Projects /> } />
        <Route path="Designs" element={ <Designs /> } />
        <Route path="Todo" element={ <Todo /> } />
        <Route path="Carousel" element={ <Carousel /> } />
      </Routes>
    </div>
    </>
  );
}

export default App;
