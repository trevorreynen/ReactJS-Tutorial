import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder'

function Navbar() {
    const [isActive, setExpandNavbar] = useState(false)

    return (
        <nav className='navbar is-dark'>
            <div className='navbar-brand'>
                <button
                    onClick={() => {
                        setExpandNavbar(!isActive)
                    }}
                    className={isActive ? 'is-active' : ''}
                    aria-label='menu'
                    aria-expanded='false'
                    data-target='navbarMenu'>

                    <ReorderIcon />
                </button>
            </div>

            <div className={`navbar-menu ${isActive ? 'is-active' : ''}}`} id='navbarMenu'>
                <div className='navbar-start'>
                    <Link className='navbar-item' to='/'>
                        Home
                    </Link>
                    <Link className='navbar-item' to='/experience'>
                        Experience
                    </Link>
                    <Link className='navbar-item' to='/projects'>
                        Projects
                    </Link>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
