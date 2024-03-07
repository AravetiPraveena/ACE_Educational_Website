import './App.css';
import Footer from './component/Footer.jsx';
import Navbar_section from './component/Navbar_section.jsx';
import Header from './component/Header.jsx';
import Home_section from './component/Home-section.jsx';
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function App() {

  const cardStyle = {
    backgroundColor: 'white',
    marginLeft: '200px',
    marginRight: '200px',
    borderRadius: '10px',
    borderLeft: '1px solid black', 
    borderRight: '1px solid black', 
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', 
    position: 'relative',
    zIndex: 1,
};



  return (

  <div>
  <div style={cardStyle}>
       <Header />
       <Navbar_section />
      {/* <Footer  /> */}
     <Home_section />
     <Footer />
     
    </div>
    <div style={{ position: 'fixed', top: '50%', right: 0, transform: 'translateY(-50%)' }} className='Outside_Icons'>
      <p className='Youtube'><FaYoutube /></p>
      <p className='facebook'><FaFacebook /></p>
      <p className='instagram'><FaInstagram /></p>
      <p className='twitter'><FaTwitter /></p>
    </div>

  </div>
  
  );
}
 
export default App;