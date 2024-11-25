import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {

    const navRef = useRef();
    const [darkBg, setDarkBg] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                setDarkBg(true);
            } else {
                setDarkBg(false);
            }
        });
    }, []);

    return (
        <div ref={navRef} className={`navbar ${darkBg ? 'nav-dark' : ''} `}>
            <div className='navbar-left'>
                <img src={logo} alt='' />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse By Languages</li>
                </ul>
            </div>
            <div className='navbar-right'>
                <img className='icons' src={search_icon} alt='' />
                <p>Children</p>
                <img className='icons' src={bell_icon} alt='' />
                <div className='navbar-profile'>
                    <img className='profile' src={profile_img} alt='' />
                    <img src={caret_icon} alt='' />
                    <div className='dropdown'>
                        <p onClick={logout}>Sign Out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar