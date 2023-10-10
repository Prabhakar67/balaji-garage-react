import React from 'react'
import { Link } from 'react-router-dom'
import Moryalogo from '../subcomponents/Moryalogo'
import strings from '../strings/strings.en-us.json';


const Navbar = () => {
    return (
        <ul className="nav">
          <Moryalogo/>
        <li><Link to="/">{strings['home.page.heading']}</Link></li>
        <li><Link to="/About">{strings['about.page.heading']}</Link></li>
        <li><Link to="/Services">{strings['services.page.heading']}</Link></li>
        <li><Link to="/Contact">{strings['contact.services.heading']}</Link></li>
      </ul>
    )
}

export default Navbar