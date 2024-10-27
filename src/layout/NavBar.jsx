import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <> 
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/add-property">AddProperty</Link>
            </li>
            <li>
                <Link to="/edit-Property">UpdateProperty</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default Navbar;
