import React from 'react'
import {FaAngleLeft,FaAngleRight,FaPhoneAlt,FaEnvelope,FaEnvelopeOpenText} from "react-icons/fa"
import './Contact.css'

function Contact() {
  const StyleIcon = { color: "limegreen", width:"30px",height: "30px" };
  const StyleLeftIconArrow ={ color: "black", width: "30px",height:"50px",margin:"35vh 5vh 0% 5vh"};
  const StyleIconRightArrow={color: "black", width: "30px",height:"50px",float :" right",margin:"35vh 5vh 0vh 0vh"}
  
  return (
    <div className='Contact' id='contact'>
    <div className='Contact_container'>
      <h2>Contact Us</h2>

      {/* Reception image section */}
      <div className='Slider'>

        <FaAngleLeft style={StyleLeftIconArrow}/>
        <FaAngleRight style ={StyleIconRightArrow}/>
        
      </div>

      {/* Contact information section */}

    <div className='contact_info'>
        <div className='email'>
          <FaEnvelope style={StyleIcon} />
            <h3>Email Address</h3>
            <p>info@nyericlub.com</p>

        </div>
        <div className='tel'>
          <FaPhoneAlt style={StyleIcon}/>
            <h3>Tel</h3>
            <p>+254724129289</p>

        </div>
        <div className='poster'>
          <FaEnvelopeOpenText style={StyleIcon}/>
          <h3>Postal Address</h3>
            <p>Nyeri Golf Club,
            <br/>P.O. Box 74 -10100,
            <br/>Nyeri – Kenya.
            </p>
        </div>
        </div>

        {/* Bookings and Enquiries section */}

        <div className="Contact_enquiries">
          <div className='enquiries_heading'>
            <h2>For Reservations/ Bookings and Enquiries</h2>
            <h3>Get In Touch</h3>
          </div>
          <div className='enquiry_content'>
            <div className='name'>
              <h4>Name*</h4>
              <input type="text"  name='Name'  required />
            </div>
            <div className='enquiry_email'>
              <h4>Email*</h4>
              <input type="email" name ="Email" required />
            </div> 
          </div>
            
          <div className='description'>
             <h4>Description*</h4>
            <input type ="textarea" name ="description" required/>
          </div> 
            
          <div className='sbt'><input type="submit" value="Submit"/></div>
        </div>
    </div>
    </div>
   
  )
}

export default Contact