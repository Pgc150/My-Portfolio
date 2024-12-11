import React from 'react'
import photo from '../../assets/photo.png'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div  id="home" className='hero'>
        <img src={photo} alt=''/>
        <h1><span>I am Payal Chavhan, </span> Frontend Developer</h1>
        <p>"Hello! I’m Payal Chavhan, a passionate engineering graduate specializing in Full-Stack Development and DevOps.<br/> With expertise in Java, JavaScript, ReactJS, and microservices, <br/>I thrive on building scalable and user-friendly web solutions</p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
          <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero