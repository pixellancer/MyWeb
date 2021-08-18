import React from 'react'
import { NavLink,Redirect} from 'react-router-dom'
import './style.css'

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className='navbar__leftIcon'>
                AC
            </h1>
            <section className='navbar__links'>
                <NavLink to="/home" className='navbar__home'>Home</NavLink>
                <NavLink to="/work" className='navbar__work'>Work</NavLink>
                <NavLink to="/resume" className='navbar__resume'>Resume</NavLink>
            </section>
        </nav>
    )
}
