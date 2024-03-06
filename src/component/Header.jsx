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
      <ul className='listElements'>
        <li className='listElementsli'>
          <p className='listElementslist'>
          <li><BsBagCheckFill /></li>
            {/* <FontAwesomeIcon icon={faBriefcase} className='icon' /> */}
            Careers
          </p>
        </li>
        <li className='listElementsli'>
          <p className='listElementslist'>
          <li><HiOutlineAcademicCap /></li>
            {/* <FontAwesomeIcon icon={faGraduationCap} className='icon' /> */}
            Online Admissions
          </p>
        </li>
        <li className='listElementsli'>
          <p className='listElementslist'>
         <li> <FaLaptopMedical /></li>
            {/* <FontAwesomeIcon icon={faRightBracket} className='icon' /> */}
            Student Login
          </p>
        </li>
        <li className='listElementsli'>
          <p className='listElementslist'>
          <li><BiSolidNotification /></li>
            {/* <FontAwesomeIcon icon={faEnvelope} className='icon' /> */}
            Job Notifications
          </p>
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