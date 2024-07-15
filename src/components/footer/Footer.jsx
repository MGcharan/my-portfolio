import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>My Portfolio</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#achievement">Achievement</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/msgiri-23nov2001/" target="_blank" ><BsLinkedin/></a>
      <a href="https://github.com/MGcharan" target="_blank"><FaGithub/></a>
     
      </div>

      <div className="footer__copyright">
  <small>&copy; Designed By <img src="./images/my-logo.png" alt="Logo" className="footer-logo" />
    
  </small>
</div>

    </footer>
  )
}

export default Footer