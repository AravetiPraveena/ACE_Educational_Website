import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBriefcase, faGraduationCap, faEnvelope, faPhone, faBars, faRightBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from './Images/ACE-LOGO-FOR-WEB.png';
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { BsBagCheckFill } from "react-icons/bs";
import { FaLaptopMedical } from "react-icons/fa";
import { BiSolidNotification } from "react-icons/bi";
import { FcBusinessContact } from "react-icons/fc";
import { MdContactPage } from "react-icons/md";
 import './Header.css';
 
function Header() {
  return (
    <nav className='navbar'>
      <div className='logoimg'>
        <img src={logo} alt='no image' style={{ width: '300px' }} />
      </div>
      <ul className='listElements' >
        <li className='listElementsli'>
          <p className='listElementslist'>
          <li><BsBagCheckFill /></li>
            {/* <FontAwesomeIcon icon={faBriefcase} className='icon' /> */}
            Careers
          </p>

          <p  style={{borderRight: '1px solid white', position: 'fixed', top: '40px', left:'57vw',  height:'50px'}}></p>
        </li>


  

        {/* <li className='listElementsli' style={{borderRight: '1px solid white', position: 'fixed', top: '50px;',  height:'70px'}}>
  <p className='listElementslist'>
    <li><HiOutlineAcademicCap /></li>
    Online Admissions
  </p>
</li>  */}






        <li className='listElementsli'>
          <p className='listElementslist'>
          <li><HiOutlineAcademicCap /></li>
            {/* <FontAwesomeIcon icon={faGraduationCap} className='icon' /> */}
            Online Admissions
          </p>

          <p  style={{borderRight: '1px solid white', position: 'fixed', top: '40px', left:'65vw',  height:'50px'}}></p>
        </li>


        <li className='listElementsli'>
          <p className='listElementslist'>
         <li> <FaLaptopMedical /></li>
            {/* <FontAwesomeIcon icon={faRightBracket} className='icon' /> */}
            Student Login
          </p>

          <p  style={{borderRight: '1px solid white', position: 'fixed', top: '40px', left:'71vw',  height:'50px'}}></p>

        </li>
        <li className='listElementsli'>
          <p className='listElementslist'>
          <li><BiSolidNotification /></li>
            {/* <FontAwesomeIcon icon={faEnvelope} className='icon' /> */}
            Job Notifications
          </p>

          <p  style={{borderRight: '1px solid white', position: 'fixed', top: '40px', left:'79vw',  height:'50px'}}></p>

        </li>
        <li className='listElementsli'>
          <p className='listElementslist'>
         <li><MdContactPage /></li>
            {/* <FontAwesomeIcon icon={faPhone} className='icon' /> */}
            Contact Us
          </p>
        </li>
        <li className='listElementsli'>
          <p className='listElementslist'>
            {/* <FontAwesomeIcon icon={faBars} className='icon barButton' /> */}
          </p>
        </li>
      </ul>
    </nav>
  );
}
 
export default Header;