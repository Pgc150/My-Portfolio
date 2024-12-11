import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import photo from '../../assets/photo.png'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={photo} alt='' />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>An energetic engineering graduate with strong problem-solving skills and a profound interest in product development, architecture, 
                        management, and exploring new things in the product.</p>
                        <p> Currently, I am learning concepts related to software development and DevOps 
                        and taking a deep dive into the domain</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Java</p> <hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p> <hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>HTML</p> <hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>CSS</p> <hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>React JS</p> <hr style={{ width: "70%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p> Participated in the “TECHRISE National Level Event” at TGCPET, Nagpur IN | April 2024 </p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>

    )
}

export default About