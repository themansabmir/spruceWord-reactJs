import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import User from '../assets/icons/user.svg'
// import Search from '../assets/icons/search.svg'
import Cart from '../assets/icons/cart.svg'
import Logo from  '../assets/images/logo.png'

const Navbar = () => {
    return (
        <div className='wrapper'>
            <div className="logo">
                <img src={Logo} alt="" />
                <Link className='title' to='/'><h1>SPRUCE WORLD</h1></Link>
            </div>
            <nav className='navLinks'>
                <ul>
                    <li><Link to='/Products'>Products</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Sign'> <img src={User} alt="" className='svg' width='30' /></Link></li>
                   



                </ul>
                <div className='cart'>
                    <span>0</span>
                    <li><Link to='/Cart'><img src={Cart} className='svg' alt="" width="30" /></Link></li>
                </div>


            </nav>

        </div>

    )
}

export default Navbar