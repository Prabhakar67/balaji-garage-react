import React from 'react'
import { Link } from 'react-router-dom'
import Moryalogo from '../subcomponents/Moryalogo'


const Navbar = () => {
    return (
        <ul className="nav">
          <Moryalogo/>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Services">Services</Link></li>
      </ul>
    )
}

export default Navbar