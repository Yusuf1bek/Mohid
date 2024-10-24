import "./Header.css"
import React from 'react'
import IconLogo from "../../assets/images/logo-link.svg"
import IconSearch from "../../assets/images/icon-search.svg"
import IconPerson from "../../assets/images/icon-person.svg"
import IconCart from "../../assets/images/icon-cart.svg"

const links = ["Home", "Brands", "Recent Products", "Contact", "About"]
const Header = () => {
  return (
    <div className="wrapper">
      <div className='container'>
        <header className='header'>
            <div className='header-logo-wrapper'>
                <a href="">
                  <img src={IconLogo} alt="" />
                </a>
            </div>
            <ul className='header-list'>
              {
                links.map((item, index) => (
                  <li key={index} className='header-item'>
                    <a href="">{item}</a>
                  </li>
                ))
              }
            </ul>
              <div className='wrapper-icon'>
                <a href="#">
                  <img src={IconSearch} alt="Search-Icon" width={20} height={23}/>
                </a>
                <a href="#">
                  <img src={IconPerson} alt="Person-Icon" width={20} height={23}/>
                </a>
                <a href="#">
                  <img src={IconCart} alt="Cart-Icon" width={20} height={23}/>
                </a>
              </div>
        </header>
      </div>
    </div>
  )
}

export default Header