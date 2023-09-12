import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../assets/img/skinbliss.png'
import '../assets/css/Footer.css'
import { FaInstagram,  FaFacebook,  FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className='footer-bg py-4'>
      <Container>
        <img src={Logo} alt="" className='foot-img'/> 
        <Row xs={1} md={4} className='g-4'>
          <Col>
          <h2 className='foot-head'>Products</h2>  
          <>
            <li className='foot-title'>Skincare</li>
            <li className='foot-title'>Women</li>
            <li className='foot-title'>New In</li>
            <li className='foot-title'>Weekly Pick</li>
          </>
          </Col>

          <Col> 
          <h2 className='foot-head'>Blog</h2> 
          <>
          <li className='foot-title'>Dermatologist recs</li>
          </>
          </Col>

          
          <Col> 
          <h2 className='foot-head'>Company Info</h2> 
          <> 
            <li className='foot-title'>About Us</li>
            <li className='foot-title'>contact Us</li>
            <li className='foot-title'>Payment Option</li>
            <li className='foot-title'>Track Order</li>
            <li className='foot-title'>Support</li>
          </>
          </Col>

          <Col> 
          <h2 className='foot-head'>Follow Us</h2> 
          <> 
            <li className='foot-icon'> <i><FaInstagram/></i> </li>
            <li className='foot-icon'> <i><FaFacebook/></i> </li>
            <li className='foot-icon'> <i><FaYoutube/></i> </li>
            
          </>
          </Col>
        </Row>
       

        {/* <div className=' my-4 d-sm-none mob'>
          <li className='foot-list'>Data Settings</li>
          <li className='foot-list'>Cookie Settings</li>
          <li className='foot-list'>Privacy Policy</li>
          <li className='foot-list'>Terms and Conditions</li>
          <li className='foot-list'>Imprint</li>
        </div> */}

        {/* <div className='d-flex justify-content-center my-4  '>
          <p className='foot-list'>Data Settings</p>
          <p className='foot-list'>Cookie Settings</p>
          <p className='foot-list'>Privacy Policy</p>
          <p className='foot-list'>Terms and Conditions</p>
          <p className='foot-list'>Imprint</p>
        </div> */}
        {/* <div className='d-flex'>
          <p>Data Settings</p>
          <p>Cookie Settings</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Imprint</p>
        </div> */}
      </Container>
    </div>
   <div className='foot-bg'>
     <Container>
       <div className='d-sm-flex justify-content-center py-4'>
          <li className='foot-list'>Data Settings</li>
          <li className='foot-list'>Cookie Settings</li>
          <li className='foot-list'>Privacy Policy</li>
          <li className='foot-list'>Terms and Conditions</li>
          <li className='foot-list'>Imprint</li>
        </div>
     </Container>
   </div>
    </>
  )
}

export default Footer
