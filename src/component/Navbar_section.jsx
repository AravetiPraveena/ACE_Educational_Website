
import './Navbar_section.css';
import new_logo from './Images/new_logo.png';
import React, { useState } from 'react';


const Navbar_section = () => {

    const [showText, setShowText] = useState(false);
    const [showSecondText, setShowSecondText] = useState(false);

    const handleMouseEnter = () => {
        setShowText(true);
      };
    
      const handleMouseLeave = () => {
        setShowText(false);
      };

const handleMouseEnterOne = () => {
    setShowSecondText(true);
}
const handleMouseLeaveOne = () => {
    setShowSecondText(false);
}

  return (
    <div className='second_navbar_container'>
    <div className='nav_items_container'>
    {/* <a href="#" className="nav-item">ABOUT US<span className="tooltip">Some text to display</span></a> */}

    <a
        href="#"
        className="nav-item"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        ABOUT US
      </a>
      {showText && (
         <div className='card'>
         <p className='show_text'>
          <p>ABOUT ACE</p>
          <p>WHY ACE</p>
         </p>
       </div>
      )}

<a
        href="#"
        className="nav-item"
        onMouseEnter={handleMouseEnterOne}
        onMouseLeave={handleMouseLeaveOne}
      >
        GATE
      </a>

      {showSecondText && (
         <div className='card'>
         <p className='show_text'>
          <p>SYLLABUS</p>
          <p>PYQ</p>
          <p>PRESENTAION TIPS</p>
          <p>GATE EXAM PATTERN</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
         </p>
       </div>
      )}


        <a href="#" className='nav-item'>ESE</a>
        <div className='new_logo-container'>
            <img src = {new_logo} className='new_logo' />
        <a href="#" className='nav-item2'>NEW_BATCHES</a>  
        </div>
        <div className='new_logo-container'>
            <img src = {new_logo} className='new_logo' />
        <a href="#" className='nav-item2'>SSC-JE</a>  
        </div>
        <div className='new_logo-container'>
            <img src = {new_logo} className='new_logo' />
        <a href="#" className='nav-item2'>APPSC/TSPSC</a>  
        </div>
        <a href="#" className='nav-item'>TEST SERIES</a>
        <a href="#" className='nav-item'>POSTAL COACHING</a>
        <a href="#" className='nav-item'>OUR RANKERS</a>
        <a href="#" className='nav-item'>AWARDS GALLERY</a>
        <a href="#" className='nav-item'>VIDEOS</a>
        <a href="#" className='nav-item'>OUR LOCATIONS</a>
        <a href="#" className='nav-item'>BLOG</a>
        <a href="#" className='nav-item'>Books</a>
        <a href="#" className='nav-item'>CONTACT US</a>

    </div>

    {/* <div className='first-heading-container'>
        <h1>BARC SO 2024 ONLINE TEST SERIES</h1>

    </div> */}
    </div>
  )
}

export default Navbar_section
