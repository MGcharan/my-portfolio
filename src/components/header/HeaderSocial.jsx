import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'



const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href="https://www.linkedin.com/in/msgiri-23nov2001/" target="_blank" ><BsLinkedin/></a>
      <a href="https://github.com/MGcharan" target="_blank"><FaGithub/></a>
     
   </div>
  )
}

export default HeaderSocial