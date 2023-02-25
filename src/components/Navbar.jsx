import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";


const Navbar = () => {
  return (
    <>
     <div className='navbarContainer'>
    <nav >
    <div >
   
      <li className='navBar' >
    <Link style={{textDecoration:"none"}} to="/" aria-label='page'>Ashish Gautam</Link>
   <Link style={{textDecoration:"none"}} to="/" aria-label='page'>Home </Link>
    <Link style={{textDecoration:"none"}} to="/projects" aria-label='page'>Projects </Link>
    <Link style={{textDecoration:"none"}} to="/contact" aria-label='page'>More projects ! </Link>
    <Link style={{textDecoration:"none"}} to="/earth" aria-label='page'>Some More projects !! </Link>
    </li>
    </div>
</nav> 
</div>
</>
  )
}

export default Navbar;
