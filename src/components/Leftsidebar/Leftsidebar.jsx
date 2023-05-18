import React from 'react'
import './Leftsidebar.css'
import { NavLink } from 'react-router-dom'
import { FaGlobe } from 'react-icons/fa'

const Leftsidebar = () => {
    return (
        <div className='left-sidebar'>
            <nav className="side-nav">
                <NavLink exact to='/' className='side-nav-links' activeClassName='active'><p>Home</p></NavLink>
                <div className="side-nav-div">
                    <div><p>PUBLIC</p></div>
                    <NavLink exact to='/Questions' className='side-nav-links' activeClassName='active'>
                        <FaGlobe/>
                        <p style={{ paddingLeft: '10px' }}>Questions</p>
                    </NavLink>
                    <NavLink exact to='/Tags' style={{ paddingLeft: '40px' }} className='side-nav-links' activeClassName='active'>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink exact to='/Users' style={{ paddingLeft: '40px' }} className='side-nav-links' activeClassName='active'>
                        <p>Users</p>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Leftsidebar
