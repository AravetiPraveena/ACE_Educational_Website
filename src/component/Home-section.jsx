import React from 'react'
import ACE_Banner from './Images/ACE_Inner-Web-Banner-BARC.png';
import './Home_section.css';
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import chart_image from './Images/Website-Page_10 (1).jpg';
import text_image from './Images/GATE-2018-ACE-ONLINE-TEST-SERIES-DURATION.jpg';
import bar_graph from './Images/TIME-USAGE-online_test_series_image.jpg';
import Time_Usage_Image1 from './Images/TIME-USAGE-GATE1.jpg';
import Time_Usage_Image2 from './Images/PREFORMANCE-GATE2.jpg';
import Time_Usage_Image3 from './Images/DIFFICULTY-LEVEL-GATE3.jpg';

const Home_section = () => {






    
  return (
    <div>
    <div className='first-heading-container'>
        <h1>BARC SO 2024 ONLINE TEST SERIES</h1>

    </div>
    <div>
    <img src={ACE_Banner} style={{ width: '90%' }} className='banner_image' />

    </div >
    <div style={{ width: '90%' }}>
        <p className='body_paragraph'>ACE Engineering Academy Online Test Series is designed to help engineering students to be more prepared, competent and get to good ranks in competitive exams of GATE, ESE, PSUs, State Service Exams, SSC-JE and other competitive exams related to technical and engineering fields.</p>
        <div className='Body_heading_container'>
            <h2>Advantages of ACE Online Test Series :</h2>
            <ul className="List_style">
    <li>Flexible & Affordable</li>
    <li>Access to questions prepared by Experts</li>
    <li>Test wise Statistics</li>
    <li>Result & Performance Analysis</li>
    <li>Rank will be given for each test</li>
    <li>Developed as per the BARC Exam pattern</li>
</ul>
 </div>
    </div>

<div className='Table_foramte'>

<table colspan={6} className='table-container' style={{ width: '90%' }}>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Type of Students</th>
          <th>Actual Price</th>
          <th>GST 18%</th>
          <th>Total</th>
          <th className='enroll-btn'>Enroll Now</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.</td>
          <td>All Students </td>
          <td>D	₹ 200/-/</td>
          <td>₹ 36/-</td>
          <td>₹ 236/-</td>
          <td>
            <button className='enroll-button'>
                ENROLL NOW
            </button>
          </td>
        </tr>
        
      </tbody>
    </table>
</div>

<div className='Table_foramte_two'>

    <h2>DETAILED SCHEDULE:</h2>

    <div className='ace-btn-container'>
        <div className='bars_icon'>
        <p className='BARC_Paragraph'>BARC Shedule</p>
        </div>
    {/* <p className='BARC_Paragraph'>BARC Shedule</p> */}
    <div className='bars_icon'>
    <p className='Test_series_Pragaraph'> 
    <span><HiOutlineBars3BottomLeft /> </span>
    TEST SERIES HIGHLIGHTS 
    <span> <HiOutlineBars3BottomRight /></span>
    </p>
    </div>

    </div>
    
</div>
   
   <div className='Table_foramte_two'>
    <h3>Rank Will Be Given For Each Test.</h3>
    <h3>Comparison With All India Toppers of ACE Students.</h3>
   </div>

   <div className='Table_foramte_two'>
    <h2>TEST WISE STATISTICS:</h2>
    <div className='Ace_cards_container'>

        <img src={text_image} className='pie_charts'/>
        <img src = {chart_image} className='pie_charts'/>
        <img src = {chart_image} className='pie_charts'/>
        {/* <div className='card-container'>
            <h2>TIME</h2>
            <div className="content">
                <p>Test Duration : <span>3 Hours</span></p>
                <p>Your Time : 2Hrs 45Min 23Sec</p>
                <p></p>
            </div>
        </div> */}
{/* 
<div className="gradient">
    skj
</div> */}
        {/* <div className='card-container'>
            <h2>ANSWERS EVALUTION</h2>
            <div className="content">
                <p>Test Duration : <span>3 Hours</span></p>
             
            </div>
        </div> */}

        {/* <div className='card-container'>
            <h2>ANSWERS EVALUATION</h2>
            <div className="content">
                <p>Test Duration : <span>3 Hours</span></p>
                <p>Your Time : 2Hrs 45Min 23Sec</p>
                <p></p>
            </div>
        </div> */}


    </div>
   </div>
   <div className='Table_foramte_two'>
    <h2>TIME USAGE FOR EACH QUESTION:</h2>
    <div>
    <img src={bar_graph} style={{ width: '90%', textAlign: 'left' }} />


    </div>
   </div>



   <div className='Table_foramte_two'>
    <h2>QUESTION WISE STATISTICS:</h2>
    <div>
   
    <div className='Ace_cards_container'>

<img src={Time_Usage_Image1} className='pie_charts'/>
<img src = {Time_Usage_Image2} className='pie_charts'/>
<img src = {Time_Usage_Image3} className='pie_charts'/>
</div>
    </div>
   </div>

<div className='contact_us_container'>
    <h3 className='contact_us_heading'>CONTACT DETAILS</h3>
    <h2 className='contact_us_heading_two'>PHONE NO. : 040-40136222</h2>
    <h2 className='contact_us_heading_two'>EMAIL : TESTSERIES@ACEENGGACADEMY.COM</h2>
</div>
    </div>
  )
}

export default Home_section
