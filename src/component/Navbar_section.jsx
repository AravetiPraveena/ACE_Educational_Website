 
import './Navbar_section.css';
import new_logo from './Images/new_logo.png';
import React, { useState } from 'react';
 
 
const Navbar_section = () => {
 
    const [showText, setShowText] = useState(false);
    const [showSecondText, setShowSecondText] = useState(false);
    const [showThirdText, setShowThirdText] = useState(false);
    const [showFourthText, setShowFourthText] = useState(false);
    const [showFifthText, setShowFifthText] = useState(false);
    const[showSixthText, setShowSixthText]= useState(false);
    const [showSevenText, setShowSeventhText] = useState(false);
    const [showEightText, setShowEightText] = useState(false);
    const [showNinethText, setShowNingthText] = useState(false);
    const [showTenthText, setShowTenthText] = useState(false);
    const [showElventhText, setShowElventhText] = useState(false);

 
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
const handleMouseEnterTwo = () => {
  setShowThirdText(true);
}
const handleMouseLeaveTwo = () => {
  setShowThirdText(false);
}
const handleMouseEnterThree = () => {
  setShowFourthText(true);
}
const handleMouseLeaveThree = () => {
  setShowFourthText(false);
}
const handleMouseEnterFour = () => {
  setShowFifthText(true);
}
const handleMouseLeaveFour= () => {
  setShowFifthText(false);
}
 
const handleMouseEnterfive = () => {
    setShowSeventhText(true);
}
 
const handleMouseLeavefive = () => {
    setShowSeventhText(false);
}

const handleMouseEnterSix = () => {
    setShowEightText(true);
}
const handleMouseLeaveSix = () => {
    setShowEightText(false);
}

const handleMouseEnterSeven = () => {
    setShowNingthText(true);
}
const handleMouseLeaveSeven = () => {
    setShowNingthText(false);
}

const handleMouseEnterEight = () => {
    showTenthText(true);
}
const handleMouseLeaveEight = () => {
    showTenthText(false);
}

// const handleMouseEnterNine = () => {
//     showElventhText(true);
// }
// const handleMouseLeaveNine = () => {
//     showElventhText(false);
// }
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
          <p>COMMON QUESTIONS</p>
          <p>GATE V/S OTHER EXAMS</p>
          <p>GATE INFO</p>
          <p>GATE EXAM 2024</p>
          <p>GATE ONLINE CLASSES</p>
          <p>CLASSROOM COACHING</p>
          <p>SPARK BATCHES</p>
         </p>
       </div>
      )}
 
 
 
 
 
<a
        href="#"
        className="nav-item"
        onMouseEnter={handleMouseEnterTwo}
        onMouseLeave={handleMouseLeaveTwo}
      >
       ESE
      </a>
      {showThirdText && (
         <div className='card'>
         <p className='show_text'>
          <p>WHAT & WHY IES</p>
          <p>IES VS GATE</p>
          <p>CLASSROOM COACHING</p>
          <p>POSTAL COACHING</p>
          <p>SPARK BATCHES</p>
          <p>NEW BATCHES SHEDULE</p>
         </p>
       </div>
      )}
 
 
        <div className='new_logo-container'>
            <img src = {new_logo} className='new_logo' />
 
            <a
        href="#"
        className="nav-item"
        onMouseEnter={handleMouseEnterThree}
        onMouseLeave={handleMouseLeaveThree}
      >
       NEW BATCHES
      </a>
 
      {showFourthText && (
         <div className='card'>
         <p className='show_text'>
          <p>ESE|GATE|PSUS 2025/26<br/>
          CLASSROOM COACHING</p>
          <p>ESEGATE|PSUS 25 EXCLUSIVE<br/>
          ONLINE LIVE CLASSES (ENGLISH)</p>
          <p>APPSE/TSPSC-AEE CLASSROOM<br/>
          COACHING FOR CIVIL, MECH, ELECTRICAL</p>
          <p>ESE MAINS (QPS & DC)</p>
          <p>ACE ONLINE PRE-RECORDED COURSES</p>
          <p>TS-GENCO-AE (ELECTRICAL) ONLINE LIVE CLASSES</p>
          <p>GATE-DA</p>
          <p>GENCO TRANSCO DISCOMS ONLINE LINE LIVE CLASSES <br/>
          AND CLASSROOM COACHING</p>
         </p>
       </div>
      )}
 
 
 
        {/* <a href="#" className='nav-item2'>NEW_BATCHES</a>   */}
        </div>
        <div className='new_logo-container'>
            <img src = {new_logo} className='new_logo' />
            <a
        href="#"
        className="nav-item"
        onMouseEnter={handleMouseEnterFour}
        onMouseLeave={handleMouseLeaveFour}
      >
       SSE-JE
      </a>
 
 
 
      {showFifthText && (
         <div className='card'>
         <p className='show_text'>
          <p>SSC JE 2024 ONLINE PRE-RECORDED COURSES</p>
          <p>WHAT IS SSC JE</p>
          <p>SSC JE IMPORTANT DATES</p>
          <p>SSC JE EXAM PATTERN 2024</p>
          <p>SSC JE 2024 ELIGIBILTY</p>
          <p>SSC JE EDUCATIONAL QUALIFICATIONS</p>
         </p>
       </div>
      )}
 
 
 
        </div>
        <div className='new_logo-container'>
            <img src = {new_logo} className='new_logo' />
            <a
        href="#"
        className="nav-item"
        onMouseEnter={handleMouseEnterfive}
        onMouseLeave={handleMouseLeavefive}
      >
      APPSC/TSPSC
      </a>
 
 
 
      {showSevenText && (
         <div className='card'>
         <p className='show_text'>
          <p>APPSC/TSPSC AEE CLASSROOM COACHING FOR CIVIL, MECH, ELECTRICAL</p>
          <p>ACE ONLINE PRE-RECORDED COURSE</p>
          <p>TSPSC GROUPS</p>
          <p>GENCO/TRANSCO/DISCOMS CLASSROOM COACHING</p>
         </p>
       </div>
      )}      
        </div>
        <a href="#" className='nav-item'>TEST SERIES</a>
        <a href="#" className='nav-item'>POSTAL COACHING</a>
        <a
        href="#"
        className="nav-item"
        onMouseEnter={handleMouseEnterSix}
        onMouseLeave={handleMouseLeaveSix}
      >
    OUR RANKERS
      </a>


      {showEightText && (
         <div className='card'>
         <p className='show_text'>
          <p>APPSC/TSPSC AEE CLASSROOM COACHING FOR CIVIL, MECH, ELECTRICAL</p>
          <p>ACE ONLINE PRE-RECORDED COURSE</p>
          <p>TSPSC GROUPS</p>
          <p>GENCO/TRANSCO/DISCOMS CLASSROOM COACHING</p>
         </p>
       </div>
      )} 

<a
        href="#"
        className="nav-item"
        onMouseEnter={handleMouseEnterSix}
        onMouseLeave={handleMouseLeaveSix}
      >
    AWARDS & GALLERY
      </a>


      {showNinethText && (
         <div className='card'>
         <p className='show_text'>
          <p>APPSC/TSPSC AEE CLASSROOM COACHING FOR CIVIL, MECH, ELECTRICAL</p>
          <p>ACE ONLINE PRE-RECORDED COURSE</p>
          <p>TSPSC GROUPS</p>
          <p>GENCO/TRANSCO/DISCOMS CLASSROOM COACHING</p>
         </p>
       </div>
      )}


<a
        href="#"
        className="nav-item"
        onMouseEnter={handleMouseEnterSeven}
        onMouseLeave={handleMouseLeaveSeven}
      >
    VIDEOS
      </a>

      {showTenthText && (
         <div className='card'>
         <p className='show_text'>
          <p>APPSC/TSPSC AEE CLASSROOM COACHING FOR CIVIL, MECH, ELECTRICAL</p>
          <p>ACE ONLINE PRE-RECORDED COURSE</p>
          <p>TSPSC GROUPS</p>
          <p>GENCO/TRANSCO/DISCOMS CLASSROOM COACHING</p>
         </p>
       </div>
      )}



{/* <a
        href="#"
        className="nav-item"
        onMouseEnter={handleMouseEnterEight}
        onMouseLeave={handleMouseLeaveEight}
      >
    OUR LOCATIONS
      </a>

      {showTenthText && (
         <div className='card'>
         <p className='show_text'>
          <p>APPSC/TSPSC AEE CLASSROOM COACHING FOR CIVIL, MECH, ELECTRICAL</p>
          <p>ACE ONLINE PRE-RECORDED COURSE</p>
          <p>TSPSC GROUPS</p>
          <p>GENCO/TRANSCO/DISCOMS CLASSROOM COACHING</p>
         </p>
       </div>
      )} */}

<a href="#" className='nav-item'>OUR LOCATIONS</a>

        <a href="#" className='nav-item'>BLOG</a>
        <a href="#" className='nav-item'>BOOKS</a>
        <a href="#" className='nav-item'>CONTACT US</a>
 
    </div>
 
    {/* <div className='first-heading-container'>
        <h1>BARC SO 2024 ONLINE TEST SERIES</h1>
 
    </div> */}
    </div>
  )
}
 
export default Navbar_section