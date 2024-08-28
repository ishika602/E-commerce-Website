import React from 'react'
import './Footer.css'
import logo from '../Assets/Frontend_Assets/lg1-removebg-preview.png'
import instagram_icon from '../Assets/Frontend_Assets/instagram_icon.png'
import pintester_icon from '../Assets/Frontend_Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/Frontend_Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="" width={100} height={100} />
        <p>TRENDO</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icons-container'>
            <img src={instagram_icon} alt="" />
        </div>
        <div className='footer-icons-container'>
            <img src={pintester_icon} alt="" />
        </div>
        <div className='footer-icons-container'>
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
