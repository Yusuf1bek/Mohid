import "./Hero.css"
import React from 'react'
import SearchIcon from "../../assets/images/search-blue.svg"
import WatchImg from "../../assets//images/hero-watch.png"
const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <div className='container'>
        <div className='hero'>
          <div>
            <div className='text-wrapper'>
                <h1 className='hero-title'>Discover Most Suitable Watches</h1>
                <p className='hero-text'>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
            </div>
              <div className='inp-wrapper'>
                  <img className="search-img" src={SearchIcon} alt="Search-Icon" width={21} height={21} />
                  <input className="inp-hero" type="text" placeholder='Find the best brands'/>
                  <button className="searcg-btn">Search</button>
              </div>
          </div>
            <img src={WatchImg} alt="WatchImg" width={461} height={563} />
        </div>
      </div>
    </div>
  )
}

export default Hero