import "./About.css"
import React from 'react'
import AvatarImg from "../../assets/images/avatar-about-1.png"
import AvatarAbout from "../../assets/images/avatar-about-2.png"
import ImgRate from "../../assets/images/rate-icon.svg"
import DotsIcon from "../../assets/images/dots.svg"

const About = () => {
  return (
    <div className='container'>
        <strong className='about-strong'>Here are our some of the best clients.</strong>
        <h2 className='about-title'>What People Say About Us</h2>
        <div className='about-wrapper'>
            <div className='wrapper-about'>
                <img src={AvatarImg} alt="Avatar-1" width={164} height={179}/>
                <div className="about-content">
                    <h3 className="about-subtitle">Hamza Faizi</h3>
                    <p className="about-text">Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                    <img src={ImgRate} alt="Icon-Rate" width={140} height={28}/>
                </div>
            </div>
            <div className='wrapper-about'>
                <img src={AvatarAbout} alt="Avatar-2" width={164} height={179}/>
                <div className="about-content">
                    <h3 className="about-subtitle">Hafiz Huzaifa</h3>
                    <p className="about-text">I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.</p>
                    <img src={ImgRate} alt="Icon-Rate" width={140} height={28}/>
                </div>
            </div>
        </div>
        <img className="dots-img" src={DotsIcon} alt="Dots-Img" width={134} height={18}/>
    </div>
  )
}

export default About