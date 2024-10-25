import React from 'react'
import "./Footer.css"
import AppleWatch from "../../assets/images/apple-smart-1.png"

const Footer = () => {
  return (
    <>
    <div className='container'>
        <footer className='footer'>
            <div className='footer-content'>
                    <strong className='footer-strong'>Subscribe To Newsletter</strong>
                    <p className='footer-text'>Get free guide about smart watches daily. </p>
                    <input className='footer-inp' type="text" placeholder='Enter Email Address' />
                    <button className='footer-btn'>Subscribe</button>
            </div>
            <img src={AppleWatch} alt="Apple-Watch" width={272} height={301}/>
        </footer>
    </div>
    <div className='last-footer'>
        <strong className='strong-footer'>Copyright @ 2022 | Mohid</strong>
    </div>
    </>
  )
}

export default Footer