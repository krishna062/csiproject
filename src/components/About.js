import React from 'react'
import Navbar from './Navbar'
import bg from '../assets/background.5jpg.jpg'

const About = () => {
  return (
    <div>
        <Navbar/>
        <div className='bg'>
            <img src={bg} alt='backimage'/>
        </div>
        
        {/* <div className="footer">
        <h1>BLOGGERS</h1>
      <p> COPYRIGHT © </p>
      <p>CONTACT US</p>
        </div> */}
    </div>
  )
}

export default About