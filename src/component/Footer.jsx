import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "./Footer.css";
 
 
function Footer() {
  return (
    <div className="footer-section">
      <div className="header-info">
        <h1 className="headings">ABOUT ACE</h1>
        <p className="paragraph">
        ACE Engineering Academy was established in the year 1995 with a prime<br/>
        motto of imparting quality education in engineering and moulding the<br/>
        engineering students to crack competitive examinations. From a small ...Read More<br/>
        </p>
        <div className="terms-info">
          <p className="paragraphic">Terms & conditions</p>
          <p to='#' className="paragraphic">Privacy Policy</p>
          <p to='#' className="paragraphic">Refund Policy</p>
        </div>
      </div>
 
    <div className="gate-info">
        <h1 className="headings">GATE</h1>
        <p  className="gate_paragraphs">GATE Exam 2024</p>
        <p className="gate_paragraphs">WHY GATE?</p>
        <p className="gate_paragraphs">Spark Batches</p>
        <p className="gate_paragraphs">Postal Coaching</p>
      </div>
 
      <div className="ese-info">
        <h1 className="headings">ESE</h1>
        <p className="paragraphs">What & Why IES</p>
        <p  className="paragraphs">IES vs GATE</p>
        <p className="paragraphs">Classroom Coaching</p>
        <p className="paragraphs">Postal Coaching</p>
      </div>
 
      <div className="follow-info">
        <h1 className="headings">Follow Us</h1>
        <div className="icon-order">
          <a href="https://www.facebook.com/aceacademy?fref=ts" target="_blank"><FaFacebook size={25} className="icons" /></a>
          <a href="https://www.instagram.com/ace_engineering_academy/?hl=en" target="_blank"><FaInstagram size={25}  className="icons" /></a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Face_enggacademy" target="_blank"><FaTwitter size={25}  className="icons" /></a>
          <a href="https://www.youtube.com/channel/UCukI6GR31qv8UkgBsZDrRSw" target="_blank"><FaYoutube size={25}  className="icons" /></a>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;