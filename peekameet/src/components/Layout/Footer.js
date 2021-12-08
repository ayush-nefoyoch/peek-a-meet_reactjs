import React from 'react'
import './Footer.css';
import facebook from '../../assets/images/fb.svg';
import insta from '../../assets/images/insta.png';
import twitter from '../../assets/images/twitter.svg';
import youtube from '../../assets/images/youtube.svg';

export const Footer = () => {
    return (
        <div className="footer">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="peek navbar-brand" href="/">  PEEKaMEET©2020</a>
  <a className="navbar-brand follow" href="/">  Follow Us:</a>

    <div className="navbar-nav">
      <a className="nav-item nav-link p-3" href="/">
      <img src={insta} width="30" height="30" alt=""/>
      </a>
      <a className="nav-item nav-link p-3" href="/">
      <img src={youtube} width="30" height="30" alt=""/>
      </a>
      <a className="nav-item nav-link p-3" href="/">
      <img src={facebook} width="30" height="30" alt=""/>
      </a>
      <a className="nav-item nav-link p-3" href="/">
      <img src={twitter} width="30" height="30" alt=""/>
      </a>
        
      <a className="nav-item nav-link active p-3" href="/">FAQs</a>
      <a className="nav-item nav-link active p-3" href="/">Terms & Conditions</a>
      <a className="nav-item nav-link active p-3" href="/">Privacy Policy</a>
      <a className="nav-item nav-link active p-3" href="/">About Us</a>
      <a className="nav-item nav-link active p-3" href="/">Press</a>
      <a className="nav-item nav-link active p-3" href="/">Contact Us</a>
      <a className="nav-item nav-link active p-3" href="/">Perks</a>
      <a className="nav-item nav-link active p-3" href="/">Blog</a>
    </div>
</nav>     
        </div>
    )
}
