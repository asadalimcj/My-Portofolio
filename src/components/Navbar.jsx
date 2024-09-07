import React from 'react';

export default function Navbar() {
  return (
    <>
        <div className='container nav_bar p-4' data-aos="fade-down" data-aos-duration="1000">
            <div className='left nav_items'>Portofolio</div>
            <div className='right'>
               <a href="#home" className='nav_items'>Home</a>
               {/* <a href="#" className='nav_items'>Experience</a> */}
               <a href="#skill" className='nav_items'>Skills</a>
               <a href="#project" className='nav_items'>Projects</a>
               <a href="#contact" className='nav_items'>Contacts</a>

            </div>
        </div>
    </>
  )
}
