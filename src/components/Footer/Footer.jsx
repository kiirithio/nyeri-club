import React from 'react'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker} from 'react-icons/hi'
import { FaInstagram, FaFacebook} from 'react-icons/fa'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='app__footer'>
        <div className="app__footer-sitemap app__flex">
            <h4 className='bold-text'>Site Map</h4>
            <ul>
            {['home', 'about', 'membership', 'experience', 'gallery']
            .map((item) =>(
                <Link to={item} style={{textDecoration: "none"}}>
                    <li className="app__flex p-text" style={{textTransform: 'capitalize'}} key={item}>
                        {item}
                    </li>
                </Link>
            ))}
            </ul>
        </div>
        <div className="app__footer-tenders">
            <h4 className='bold-text'>Tenders</h4>
            <p className='p-text'>Committee</p>
        </div>
        <div className="app__footer-contact">
            <h4 className='bold-text'>Contact Us</h4>
            <div className="app__footer-icons">
                <HiOutlineMail />
                <HiOutlinePhone />
                <FaInstagram />
                <FaFacebook />
            </div>
            <p style={{color: 'limegreen'}}>@ The Nyeri Golf Club <span className='bold-text'>ALL RIGHTS RESERVED 2022</span></p>
        </div>
        <div className="app__footer-location">
            <h4  className='bold-text'>Location View Map</h4>
            <div className="app__footer-icons">
                <HiOutlineLocationMarker />
            </div>
            <Link to={"/home"} className='bold-text' style={{textDecoration:'none', float:'right'}}>Back to Top</Link>
        </div>
    </div>
  )
}

export default Footer