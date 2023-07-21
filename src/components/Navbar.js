import React from 'react'
import "./NavbarStyles.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const handlelogout=()=>{
    localStorage?.removeItem("authToken");
    window.location.reload();
  }
  return (
    <>
    <nav className="main-nav">
        <div className='logo'>
            <a href='/'>
                <span>B</span>loggers
                {/* <span>S</span>avy */}
            </a>
        
        </div>
        <div className="nav-menu">
            <ul className='nav-links'> 
              <NavLink exact to ={"/"} >
              <li> Home</li>
              </NavLink>
              <NavLink to={"/AboutUs"} >
              <li> About us</li>
              </NavLink>
              <NavLink to={"/NewBlog"} >
              <li> New Blog</li>
              {/* <li><input type="text" placeholder='search blogs' name='search'></input></li> */}
              </NavLink>
              {/* <NavLink to={"/services"}>
              <li> Services</li>
              </NavLink> */}

                
            </ul>
        </div>

        <div className="btns">
            <ul>
                {/* <li><a href="/" className='login'>Log In </a></li> */}
                {/* <li><a href="/"className='signup'>Sign Up</a></li> */}
                <button onClick={handlelogout} className='logout'>Log out</button>
            </ul>
           
        </div>
    </nav>

    </>
    
  )
}

export default Navbar