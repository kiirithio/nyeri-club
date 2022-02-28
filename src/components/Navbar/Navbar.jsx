import React from 'react'
import { HiOutlineMenu } from 'react-icons/hi';
import './Navbar.scss'
import logo  from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='app__navbar'>
        <div className="app__navbar-menu">
            <HiOutlineMenu />
        </div>
        <div className="app__navbar-logo">
            <img src={logo} alt="logo" />
        </div>
        <ul className="app__navbar-links">
            {['home', 'about', 'membership', 'experience', 'gallery', 'contact']
            .map((item) =>(
                <NavLink to={item} style={{textDecoration: "none"}} activeClassName="active">
                    <li className="app__flex p-text " key={item}>
                        <p>{item}</p>
                    </li>
                </NavLink>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar