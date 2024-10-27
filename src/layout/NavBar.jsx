import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    const handleLogOut = () => {
        localStorage.setItem('login', JSON.stringify({ isLoggedin: false}))
    }
  return (
    <header>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/add-property">AddProperty</Link>
            </li>
            <li>
                <Link to="/login">Log in</Link>
            </li>
            <li>
                <Link to="/logout" onClick={handleLogOut}>Log out</Link>
            </li>
        </ul>
        <Outlet />
    </nav>
    </header>
   
    
    
    
   
  )
}

export default Navbar;
