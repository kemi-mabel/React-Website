import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <header>
        <div><img src="assets/pwc1.png" height="50" width="50"/> </div>
        <div><h1>PWC Student Website<br/></h1>
        </div>
        <div>
        <Link to="/home">Home</Link> |
        <Link to="/about">About Us</Link> |
        <Link to="/contactus">Contact Us</Link> |
        <Link to="/applicationform">Application Form</Link> |
        <Link to="/gallery">Gallery</Link> |
        <Link to="/studentdata">Student Website</Link>
        <Link to id="darkMode"><img src="asset/dark.png"/></Link>
        </div>
    </header> 
    </div>
  )
}

export default Header
