import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

/**
 * The Nav component is a navigation bar that appears at the top of the Job Finder website. It
 * includes links to the homepage and various pages for logging in and signing up as a freelancer
 * or employeer.
 *
 * @returns {JSX.Element} A React component that renders the navigation bar.
 */

const Nav = () => {
  return (
    <div className="nav-bar">
        <div className="left">
            <div className="name"><Link to={"/"}>Job <span>Finder</span></Link></div>
        </div>
        <div className="right">
            <div className="list">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/logine"}>Login Employeer</Link></li>
                    <li><Link to={"/login"}>Login Freelancer</Link></li>
                    <li><Link to={"/signupe"}>Signup Employeer</Link></li>
                    <li><Link to={"/signup"}>Sigup Freelancer</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav
